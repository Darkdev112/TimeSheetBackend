const express=require("express");
const route=express.Router();
const{dummyTodoController}=require("../controllers");

//get
route.get("/get",[],dummyTodoController.getTodo);


//getSingleTodo
route.get("/getOne/:id",[],dummyTodoController.getATodo);

//post
route.post("/post",[],dummyTodoController.postTodo);

//edit
route.put("/edit/:id",[],dummyTodoController.updateTodo);

// //delete
route.delete("/delete/:id",[],dummyTodoController.deleteTodo);

module.exports=route;