const express=require("express");
const route=express.Router();

const {authController}=require("../controllers");

route.post("/createUser",[],authController.createUser);
route.post("/loginUser",[],authController.loginUser);


module.exports=route;

