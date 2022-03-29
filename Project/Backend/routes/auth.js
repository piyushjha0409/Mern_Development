const express = require('express'); 
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');

//Create a user using : POST "/api/auth/". Doesnt require auth
router.post('/', [
   body('name', 'Enter a valid name').isLength({min: 3}),
   body('email', 'Enter a valid email').isEmail(),
   body('password').isLength({min: 5})
],(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros: erros.array() })
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,      
    }).then(user => res.join(user));
    
    res.send(req.body);
})

module.exports = router