import { User,  } from './user.interface';
import { Sequelize, Model, DataTypes, Op } from 'sequelize'

const sequelize = new Sequelize('nodejs_homework_db', 'root', null, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
    .authenticate()

export class UserModel extends Model {}

UserModel.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN
}, {
    modelName: 'User',
    sequelize
});

export const userDB = {
    get: async (id: string): Promise<UserModel | undefined> => {
        const res = await UserModel.findOne({
            where: { id }
        })

        return res;
    },
    getByLogin: async (loginSubstring: string, limit: number = 10): Promise<UserModel[]> => {
        const res = await UserModel.findAll({
            where: {
                login: {
                    [Op.startsWith]: loginSubstring
                }
            },
            limit,
            order: [
                ['login', 'DESC']
            ]
        });
        
        return res;
    },
    create: async(user: Partial<User>): Promise<UserModel> => {
        const newUser = { ...user, isDeleted: false } as User;
        
        const res = await UserModel.create(newUser)

        return res;
    },
    update: async (id: string, updatedUser: Partial<User>): Promise<UserModel | false> => {
        const res = await UserModel.findOne({
            where: { id }
        });

        if (!res) return false;

        res.update(updatedUser);
        await res.save();

        return res;
    },
    remove: async (id: string): Promise<boolean> => {
        const res = await UserModel.findOne({
            where: { id }
        })

        if (!res) return false;

        res.update({ isDeleted: true });
        await res.save();

        return true;
    }
};
