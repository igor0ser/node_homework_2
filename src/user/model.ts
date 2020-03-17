import { Model, DataTypes, Op } from 'sequelize'
import { sequelize } from '../helpers/initDB'

export class User extends Model {
    public id!: number;
    public login!: string;
    public password!: string;
    public age!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
}, {
    modelName: 'User',
    sequelize
});

type GetManyByAttrPayload = {
    attr: keyof User,
    value: any,
    limit: number,
    order: [keyof User, 'ASC' | 'DESC'][]
}

export const UserModel = {
    getOneById: (id: number): Promise<User | undefined> =>
      User.findByPk(id),
    getManyByAttr:  ({ attr, value, limit, order }: GetManyByAttrPayload): Promise<User[]> =>
        User.findAll({
            where: {
                [attr]: {
                    [Op.startsWith]: value
                }
            },
            limit,
            order,
        }),
    remove: async (id: number): Promise<boolean> => {
        const res = await User.findByPk(id)

        if (!res) return false;

        res.update({ isDeleted: true });
        await res.save();

        return true;
    },
    create: (user: Partial<User>): Promise<User> => {
        const newUser = { ...user, isDeleted: false };

        return User.create(newUser)
    },
    update: async (id: number, updatedUser: Partial<User>): Promise<User | false> => {
        const res = await User.findByPk(id);

        if (!res) return false;

        res.update(updatedUser);

        return res.save();
    },
};
