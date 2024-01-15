const Todo = require("./dummyTodoModel");
const User = require("./user.sql");
const Auth = require("./auth.sql");

//associations
Auth.hasOne(User,{
    foreignKey : 'auth_id'
})
User.belongsTo(Auth,{
    foreignKey: 'auth_id'
})

module.exports={
    Todo,
    User,
    Auth,
}