// controllers/userController.js
const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const user = await User.create({ nome, email });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};
