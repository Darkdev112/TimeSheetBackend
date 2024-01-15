const checkAdmin = (req, res, next) => {
    if(!req.body.role){
      next();
    }
    else{
      if(!req.AuthToken){
        res.status(401).send("Not Authorized");
      }
      const decodedUser = jwt_decode(token);
      if(decodedUser.role != "admin"){
        res.status(401).send("Not Authorized");
      }
      next();
    }
};

module.exports = {checkAdmin}