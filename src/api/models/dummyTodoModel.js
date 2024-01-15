// models/todo.js
const { DataTypes} = require('sequelize');
const {postgresServer}= require('../db'); 

const Todo = postgresServer.sequel.define('todoz', {
  description:{
    type:DataTypes.STRING(255)
  },
  createdAt:{
    type:DataTypes.DATE
  },
  updatedAt:{
    type:DataTypes.DATE
  },
});

module.exports = {Todo};
