'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
      {
        username: 'disaada',
        password: bcrypt.hashSync('10513330', 10),
        createdAt: Sequelize.fn('NOW') ,
        updatedAt: Sequelize.fn('NOW')
      }
    ], {})

  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {})

  }
};
