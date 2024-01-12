const Todoz=require("./dummyTodoModel");
const {user} = require("./userTable.sql");
const {userAuth}=require("./userAuth.sql");

module.exports={
    Todoz,
    user,
    userAuth
}