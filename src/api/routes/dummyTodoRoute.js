const express=require("express");
const route=express.Router();
const{dummyTodoControllerz}=require("../controllers");

//get
route.get("/get",[],dummyTodoControllerz.getTodo);


//getSingleTodo
route.get("/getOne/:id",[],dummyTodoControllerz.getATodo);

//post
route.post("/post",[],dummyTodoControllerz.postTodo);

//edit
route.put("/edit/:id",[],dummyTodoControllerz.updateTodo);

// //delete
route.delete("/delete/:id",[],dummyTodoControllerz.deleteTodo);

module.exports=route;