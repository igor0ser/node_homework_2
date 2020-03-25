'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGroup = sequelize.define('UserGroup', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {});
  UserGroup.associate = function(models) {

    const { User, Group } = models

    // User.belongsToMany(Group, { through: UserGroup})

    UserGroup.hasOne(User, { onUpdate: 'cascade' })
    UserGroup.hasOne(Group, { onUpdate: 'cascade' })
  };
  return UserGroup;
};