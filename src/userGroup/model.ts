import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../helpers/initDB';

export class UserGroup extends Model {
    public readonly id!: number;
    public userId!: string;
    public groupId!: Permission[];
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserGroup.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER
    },
    groupId: {
        type: DataTypes.INTEGER
    }
}, {
    modelName: 'UserGroup',
    sequelize
});

export const UserGroupModel = {
    getAll: (): Promise<UserGroup[]> => UserGroup.findAll(),
    create: (userGroup: Partial<UserGroup>): Promise<UserGroup> =>
        UserGroup.create(userGroup),
};
