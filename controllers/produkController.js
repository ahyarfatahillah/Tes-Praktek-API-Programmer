const { Produk } = require("../models");
const getProduk = async (req, res) => {
    const produks = await Produk.findAll();
    res.json({ content: produks });
  };
  module.exports = { getProduk };