// models/todo.js
const { DataTypes, Model} = require('sequelize');
const {postgresServer}= require('../db'); 

class Todo extends Model{}

Todo.init({
  description:{
    type:DataTypes.STRING
  },
  createdAt:{
    type:DataTypes.DATE
  },
  updatedAt:{
    type:DataTypes.DATE
  }
},{
  sequelize : postgresServer.sequel,
  modelName : 'todos',
  timestamps : false,
  freezeTableName : true
})

module.exports = Todo;
