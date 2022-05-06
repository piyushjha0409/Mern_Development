const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Piyushisabadboy';

const fetchuser = (req, res, next)=>{
    
    //Get the user from the jwt token and add id to the req object
     const token = req.header('auth-token');
     if(!token){
         return res.status(401).send({error: "Token cannot be empty"})
     }
     //if the token is valid     
     try {
         const data = jwt.verify(token, JWT_SECRET);
         req.user = data.user;
         next()
     } catch (error) {
          return res.status(401).send({error: "Please authenticate using a valid token"})
     }

}

module.exports = fetchuser;