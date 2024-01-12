const express=require("express");
const route=express.Router();

const {authUser}=require("../controllers");

route.post("/createUser",[],authUser.createUser);







module.exports=route;

