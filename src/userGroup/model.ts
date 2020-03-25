import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../helpers/initDB';
import { Group } from '../group/model';
import { User } from '../user/model'

export class UserGroup extends Model {
    public readonly id!: number;
    // public UserId!: number;
    // public GroupId!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

UserGroup.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    // userId: {
    //     type: DataTypes.INTEGER
    // },
    // groupId: {
    //     type: DataTypes.INTEGER
    // }
}, {
    modelName: 'UserGroup',
    sequelize
});

// User.hasMany(Group)
//
// User.belongsToMany(Group, { through: UserGroup, onDelete: 'cascade' })

UserGroup.hasOne(User, {
    foreignKey: {
        allowNull: false
    }
})
UserGroup.hasOne(Group)

User.hasMany(UserGroup)
Group.hasMany(UserGroup)

export const UserGroupModel = {
    getAll: (): Promise<UserGroup[]> => UserGroup.findAll(),
    create: (userGroup: Partial<UserGroup>): Promise<UserGroup> =>
    {
        console.log(userGroup);
        return UserGroup.create({
            UserId: 1,
            GroupId: 1,
        })
    },
};
