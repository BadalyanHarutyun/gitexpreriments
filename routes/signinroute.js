const express = require("express");
const signInRoute = express.Router();
const { body, validationResult } = require('express-validator');

const {compare} = require('../helpers/encryptandcomparepassword')
const User = require('../database/models/index');
signInRoute.get("/login", (req, res, next) => {
    console.log("hi")
    if(req.session.userId) {
        return res.send({msg: '/profile'});
    }
    return res.send({msg: "success"});

})
signInRoute.post("/login", body("email").isEmail(), body('password').isLength({ min: 8 }), async (req, res) => {
    try {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            throw "Invalid Password or Email";
        }
        const user = await User.findOne({raw: true, where:{email: req.body.email}});
        if(user === null) {
            throw "Invalid Password or Email";
        }
        if (user.authenticated) {
        const match = await compare(req.body.password, user.password);
            if (match) {
                console.log(user.id)
                req.session.userId = user.id;
                req.session.userEmail = user.email;
                return res.send({msg: 'success'});
            } else {
                throw "Invalid Password or Email";
            }
        } else {
            throw "Please check your email for authentication";
        }
    } catch(err) {
        res.send({msg:err })
    }
})
module.exports = signInRoute;