const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Unauthorized: Missing token" });
    }
  
    const token = authHeader.split(" ")[1]; 
  
    try {
      const decode = jwt.verify(token, "viraj"); 
      req.user = decode; 
      next(); 
    } catch (err) {
      return res.status(401).json({ msg: "Unauthorized: Invalid token" });
    }
  };

const auth=(req,res,next)=>{
    console.log(req.user)
    if(req.user.userRole=="admin")
    {
        next()
    }else{
        res.send({msg : "unuothorized"})
     }
}
module.exports={verify,auth}