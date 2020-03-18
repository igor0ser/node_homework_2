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
    UserGroup.hasOne(User)
    UserGroup.hasOne(Group)
  };
  return UserGroup;
};