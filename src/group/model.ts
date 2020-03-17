import { Model, DataTypes, Op } from 'sequelize'
import { sequelize } from '../helpers/initDB'
import { Permission, PERMISSIONS_VALUES } from './interfaces'

export class Group extends Model {
    public readonly id!: number;
    public name!: string;
    public permissions!: Permission[];
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Group.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    permissions: DataTypes.ARRAY(
      DataTypes.ENUM(...PERMISSIONS_VALUES)
    ),
}, {
    modelName: 'Group',
    sequelize
});

export const GroupModel = {
    getOneById: (id: number): Promise<Group | undefined> =>
      Group.findByPk(id),
    getAll: (): Promise<Group[]> => Group.findAll(),
    // getManyByAttr:  ({ attr, value, limit, order }: GetManyByAttrPayload): Promise<User[]> =>
    //     User.findAll({
    //         where: {
    //             [attr]: {
    //                 [Op.startsWith]: value
    //             }
    //         },
    //         limit,
    //         order,
    //     }),
    // remove: async (id: number): Promise<boolean> => {
    //     const res = await User.findByPk(id)
    //
    //     if (!res) return false;
    //
    //     res.update({ isDeleted: true });
    //     await res.save();
    //
    //     return true;
    // },
    // create: (user: Partial<User>): Promise<User> => {
    //     const newUser = { ...user, isDeleted: false };
    //
    //     return User.create(newUser)
    // },
    // update: async (id: number, updatedUser: Partial<User>): Promise<User | false> => {
    //     const res = await User.findByPk(id);
    //
    //     if (!res) return false;
    //
    //     res.update(updatedUser);
    //
    //     return res.save();
    // },
};
