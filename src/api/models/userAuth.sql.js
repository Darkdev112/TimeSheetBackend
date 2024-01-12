// models/todo.js
const { DataTypes} = require('sequelize');
const {postgresServer}= require('../db'); 

const userAuth = postgresServer.sequel.define('auth', {
  email:{
    type:DataTypes.STRING(255)
  },
  password:{
    type:DataTypes.STRING(255)
  }
}, {
  timestamps: false,
});

module.exports = {userAuth};
