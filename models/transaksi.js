'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey:"id"
      })
      this.belongsTo(models.Saldo,{
        foreignKey:"id"
      })
      this.belongsTo(models.Produk,{
        foreignKey:"id"
      })
    }
  }
  Transaksi.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      allowNull:false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references:{
        model:'Users',
        key:'id'
      }
    },
    saldoId: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references:{
        model:'Saldos',
        key:'id'
      }
    },
    jumlah: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.BOOLEAN
    },
    produkId: {
      allowNull:false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      references:{
        model:'Produks',
        key:'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Transaksi',
  });
  return Transaksi;
};