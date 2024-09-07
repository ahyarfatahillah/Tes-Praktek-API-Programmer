const {Transaksi}=require('../models')
const createTransaksi = async (req, res) => {
    const { body } = req;
    const transaksis = await Transaksi.create({ ...body });
    res.json({ content: transaksis });
  };
const getTransaksi = async (req, res) => {
    const transaksis = await Transaksi.findAll();
    res.json({ content: transaksis });
  };
module.exports={getTransaksi,createTransaksi}