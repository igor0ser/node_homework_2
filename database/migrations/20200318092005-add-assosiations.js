'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'UserGroups', // name of Source model
      'userId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
      }
    );

    return queryInterface.addColumn(
      'UserGroups', // name of Source model
      'groupId', // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Groups', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserGroups');
  }
};