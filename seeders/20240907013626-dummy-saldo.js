'use strict';
const { v4: uuidv4 } = require('uuid');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = await queryInterface.sequelize.query(
      'SELECT id FROM `Users`;',
      { type: Sequelize.QueryTypes.SELECT }
    );

    if (users.length === 0) {
      throw new Error("Tidak ada data user di tabel Users. Tambahkan data user terlebih dahulu.");
    }
    return await queryInterface.bulkInsert(
      "Saldos",
      [
        {
          id: uuidv4(),
          userId: users[0].id, // Gunakan userId yang valid dari Users
          saldo: 500000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          userId: users[1].id,
          saldo: 250000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
