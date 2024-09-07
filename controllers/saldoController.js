const { Saldo } = require("../models");
const getSaldo = async (req, res) => {
    const saldos = await Saldo.findAll();
    res.json({ content: saldos });
  };
  module.exports = { getSaldo };