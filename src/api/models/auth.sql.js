// models/todo.js
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { DataTypes, Model } = require('sequelize');
const { postgresServer } = require('../db');
const  config  = require('../../config/config')

class Auth extends Model {

  static async findByCredentials(email, password) {
    const existingAuth = await this.findOne({
      where: {
        email: email
      }
    })
    if (!existingAuth) {
      throw new Error("User not found")
    }

    const isValidPassword = await bcrypt.compare(password, existingAuth.password)
    if (!isValidPassword) {
      throw new Error("Password is incorrect")
    }

    return existingAuth
  }

  async generateToken() {
    const token = jwt.sign({email: this.email}, config.jwt_secret)
    if(!token){
      throw new Error('Token generation failed')
    }

    this.tokens = this.tokens.concat(token)
    await this.save()

    return token
  }
}

Auth.init({
  auth_id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4(),
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tokens : {
    type : DataTypes.ARRAY(DataTypes.STRING),
    defaultValue : []
  }
}, {
  sequelize: postgresServer.sequel,
  modelName: 'auths',
  timestamps: false,
  freezeTableName: true,
})

module.exports = Auth;
