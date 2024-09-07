'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transaksis', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userId: {
        allowNull:false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references:{
          model:'Users',
          key:'id'
        }
      },
      saldoId: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references:{
          model:'Saldos',
          key:'id'
        }
      },
      jumlah: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull:false,
        type: Sequelize.BOOLEAN
      },
      produkId: {
        allowNull:false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        references:{
          model:'Produks',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaksis');
  }
};
