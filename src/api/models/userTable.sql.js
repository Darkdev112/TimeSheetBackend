// models/todo.js
const { DataTypes} = require('sequelize');
const {postgresServer}= require('../db'); 

const user = postgresServer.sequel.define('user', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  first_name:{
    type:DataTypes.STRING(255)
  },
  last_name:{
    type:DataTypes.STRING(255)
  },
  email:{
    type:DataTypes.STRING(255)
  },
  phone:{
    type:DataTypes.STRING(255)
  },
  role_id:{
    type:DataTypes.INTEGER
  }
}, {
  timestamps: false,
});

module.exports = {user};
