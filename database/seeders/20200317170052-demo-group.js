'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Groups', [
      {
        name: 'my group',
        permissions: Sequelize.literal(
          `ARRAY['READ', 'WRITE']::"enum_Groups_permissions"[]`
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'node js workshop',
        permissions: Sequelize.literal(
          `ARRAY['DELETE', 'SHARE', 'UPLOAD_FILES']::"enum_Groups_permissions"[]`
        ),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
}