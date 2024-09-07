"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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
      "SELECT id FROM `Users`;",
      { type: Sequelize.QueryTypes.SELECT }
    );
    const saldos = await queryInterface.sequelize.query(
      "SELECT id FROM `Saldos`;",
      { type: Sequelize.QueryTypes.SELECT }
    );
    const produks = await queryInterface.sequelize.query(
      "SELECT id FROM `Produks`;",
      { type: Sequelize.QueryTypes.SELECT }
    );
    return await queryInterface.bulkInsert(
      "Transaksis",
      [
        {
          id: uuidv4(),
          userId: users[0].id,
          saldoId: saldos[0].id,
          jumlah: 50000,
          status: true,
          produkId: produks[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          userId: users[1].id,
          saldoId: saldos[1].id,
          jumlah: 150000,
          status: true,
          produkId: produks[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
