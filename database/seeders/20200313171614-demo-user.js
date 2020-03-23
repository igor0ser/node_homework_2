'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        login: 'abcdefg',
        password: 'aaaaa#aaa',
        age: 33,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'efghabcd',
        password: 'bb456',
        age: 44,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'abcdefg1',
        password: '1234aa',
        age: 13,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        login: 'xyzxyzxyz',
        password: 'cc789',
        age: 50,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
}