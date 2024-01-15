const { userAuth,user } = require('../models');
const logger=require("../../config/logger")
const bcrypt=require("bcrypt");


const createUser = async (req, res, next) => {
  try {
    const {
      email,
      password,
    } = req.body;

    const existingUser = await userAuth.findOne({ where: { email:email } });

    if (existingUser) {
      // req.session.error = "User already exists";
      return res.status(404).send({ msg: "User already exists" });
    }

    
    const bcryptPassword = await bcrypt.hash(password, 10);

    
      let newUser = await userAuth.create({
        email,
        password: bcryptPassword,
      });





    const currUser=await userAuth.findOne({ where: { email } });

    let updatedUser;

    if (!req.body.role) {
      updatedUser = await user.create({
        user_id:currUser.id,
        role_id:4,
        email:email,
      });
    } else {
      updatedUser = await user.create({
        user_id:currUser.id,
        role_id: req.body.role,
        email:email
      });
    }





    return res.status(201).send(newUser);
  } catch (error) { 
    logger.error(`error :- ${error.message}`);
    next(error); 
  }
};

module.exports = { createUser };
