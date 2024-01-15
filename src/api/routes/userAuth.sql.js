const express=require("express");
const route=express.Router();

const {authUser}=require("../controllers");

route.post("/createUser",[],authUser.createUser);
route.post("/loginUser",[],authUser.loginUser);







module.exports=route;

