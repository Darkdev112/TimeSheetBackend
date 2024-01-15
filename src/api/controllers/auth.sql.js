const bcrypt = require('bcrypt')
const { Auth, User } = require('../models');
const logger = require("../../config/logger")


const createUser = async (req, res, next) => {
  try {
    const { email, password, role_id } = req.body;

    const existingUser = await Auth.findOne({
      where: {
        email: email
      }
    })
    if (existingUser) {
      // req.session.error = "User already exists";
      return res.status(404).send({ msg: "User already exists" });
    }

    const bcryptPassword = await bcrypt.hash(password, 10);


    const newAuth = await Auth.create({
      email: email,
      password: bcryptPassword,
    });

    const newUser = await User.create({
      email: email,
      role_id: (role_id ? role_id : 4),
      auth_id: newAuth.auth_id
    })

    res.status(201).send({ user: newUser });

  } catch (error) {
    logger.error(`error :- ${error.message}`);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const existingAuth = await Auth.findByCredentials(email, password)

    const token = await existingAuth.generateToken()

    // req.session.isAuth = true;
    // req.session.username = user.username;

    res.status(200).send({ token: token })

  } catch (error) {
    logger.error(`error :- ${error.message}`);
    next(error);
  }
}

module.exports = { createUser, loginUser };
