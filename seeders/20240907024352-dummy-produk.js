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
    return await queryInterface.bulkInsert(
      "Produks",
      [
        {
          id: uuidv4(),
          namaProduk: "Pulsa Telkomsel",
          harga: 50000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          namaProduk: "Voucher Game AOV",
          harga: 150000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuidv4(),
          namaProduk: "Pulsa Indosat",
          harga: 20000,
          createdAt: new Date(),
          updatedAt: new Date()
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
