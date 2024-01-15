// models/todo.js
const {v4 : uuidv4} = require('uuid')
const {DataTypes, Model} = require('sequelize');
const {postgresServer}= require('../db'); 

class User extends Model{}

User.init({
  user_id: {
    type: DataTypes.UUID,
    defaultValue : uuidv4(),
    allowNull : false,
    primaryKey: true,
  },
  first_name:{
    type:DataTypes.STRING
  },
  last_name:{
    type:DataTypes.STRING
  },
  email:{
    type:DataTypes.STRING,
    allowNull : false,
  },
  phone:{
    type:DataTypes.STRING
  },
  role_id:{
    type:DataTypes.INTEGER
  }
},{
  sequelize : postgresServer.sequel,
  modelName : 'users',
  timestamps : false,
  freezeTableName : true
})

module.exports = User;
