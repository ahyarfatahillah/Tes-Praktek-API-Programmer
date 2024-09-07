const { User } = require("../models");
const deleteUser = async (req, res) => {
  const deleteUser = await User.destroy({ where: { id: req.params.id } });
  res.json({ content: deleteUser });
};
const createUsers = async (req, res) => {
  const { body } = req;
  const users = await User.create({ ...body });
  res.json({ content: users });
};
const editUsers = async (req, res) => {
  const { body, params } = req;
  const user = await User.findOne({ where: { id: params.id } });
  const updateUsers = await User.update(
    { ...user, ...body },
    { where: { id: params.id } }
  );
  res.json({ content: updateUsers });
};
const getUser = async (req, res) => {
  const users = await User.findAll({
    include: "Saldo",
  });
  res.json({ content: users });
};
module.exports = { getUser, createUsers, deleteUser, editUsers };
