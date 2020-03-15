import { Sequelize, Model, DataTypes, Op } from 'sequelize'
import { UserAttributes } from './interface'

const sequelize = new Sequelize('nodejs_homework_db', 'root', null, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()

export class User extends Model<UserAttributes, UserAttributes> {
}

User.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
}, {
    modelName: 'User',
    sequelize
});

type GetManyByAttrPayload = {
    attr: keyof UserAttributes,
    value: any,
    limit: number,
    order: [keyof UserAttributes, 'ASC' | 'DESC'][]
}

export const UserModel = {
    getOneById: async (id: number): Promise<UserAttributes | undefined> => {
        const res: User = await User.findOne({ where: { id } });

        return res && (res.get() as UserAttributes);
    },
    getManyByAttr: async ({ attr, value, limit, order }: GetManyByAttrPayload): Promise<UserAttributes[]> => {
        const res = await User.findAll({
            where: {
                [attr]: {
                    [Op.startsWith]: value
                }
            },
            limit,
            order,
        })

        return res.map(item => item.get() as UserAttributes)
    },
    remove: async (id: number): Promise<boolean> => {
        const res = await User.findOne({
            where: { id }
        })

        if (!res) return false;

        res.update({ isDeleted: true });
        await res.save();

        return true;
    },
    create: async(user: Partial<UserAttributes>): Promise<UserAttributes> => {
        const newUser = { ...user, isDeleted: false } as UserAttributes;

        const res = await User.create(newUser)

        return res.get() as UserAttributes;
    },
    update: async (id: number, updatedUser: Partial<UserAttributes>): Promise<UserAttributes | false> => {
        const res = await User.findOne({ where: { id } });

        if (!res) return false;

        res.update(updatedUser);

        await res.save();

        return res.get() as UserAttributes;
    },
};
