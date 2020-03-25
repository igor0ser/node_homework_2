import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../helpers/initDB';
import { Permission, PERMISSIONS_VALUES } from './interfaces';

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
        primaryKey: true
    },
    name: DataTypes.STRING,
    permissions: DataTypes.ARRAY(
        DataTypes.ENUM(...PERMISSIONS_VALUES)
    )
}, {
    modelName: 'Group',
    sequelize
});

export const GroupModel = {
    getOneById: (id: number): Promise<Group | undefined> =>
        Group.findByPk(id),
    getAll: (): Promise<Group[]> => Group.findAll(),
    remove: async (id: number): Promise<boolean> => {
        const res = await Group.findByPk(id);

        if (!res) return false;

        await res.destroy();

        return true;
    },
    create: (group: Partial<Group>): Promise<Group> =>
        Group.create(group),
    update: async (id: number, updatedGroup: Partial<Group>): Promise<Group | false> => {
        const res = await Group.findByPk(id);

        if (!res) return false;

        res.update(updatedGroup);

        return res.save();
    }
};
