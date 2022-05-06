const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { response } = require('express');
const bcrypt = require('bcryptjs');  //importing bcrypt
var jwt = require('jsonwebtoken');  //importing jwt for user authentication 
const { findOne, findById } = require('../models/User');
var fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "Piyushisabadboy"

// ROUTE 1: Create a user using : POST "/api/auth/createuser". Doesnt require auth
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    //if there are errors return bad requests   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    //check wether the user exists already 

    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "The User Already Exists!" })
        } else {
            let salt = await bcrypt.genSalt(10);
            let secretPass = await bcrypt.hash(req.body.password, salt);

            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secretPass,
            })
            const data = {
                user: {
                    id: user.id
                }
            }
            const authtoken = jwt.sign(data, JWT_SECRET)

            res.json({ authtoken })

        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server Error!")
    }
})

// ROUTE 2: User Login authentication  using : POST "/api/auth/login"

router.post('/login', [
    body('email', 'Enter the valid email').isEmail()
], async (req, res) => {

    //if there are erros then return the bad request and errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Sorry the user does not exists" })
        }

        //comparing the password of the user and in database
        const passwordCompare = bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Sorry , please try again with valid credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ authtoken })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server Error!");

    }
})

//ROUTE 3: Get loggeed in user details  using : POST "/api/auth/getuser" Login required!

router.post('/getuser', fetchuser, async (req, res) => {

    try {
        let userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal server Error!");
    }
})

module.exports = router