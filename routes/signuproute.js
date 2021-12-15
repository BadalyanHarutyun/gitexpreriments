const url = require("url");

const express = require('express');
const signUpRoute =  express.Router();
const { body, validationResult } = require('express-validator');

const {BaseUrl} = require('../config.js');
const {encode} = require("../helpers/encodeanddecodetoken");
const {encrypt} = require("../helpers/encryptandcomparepassword");
const sendEmail = require("../helpers/sendemail");
const {User} = require("../database/models/index");
signUpRoute.post("/signup",
    body("email").isEmail(),
    body("firstName").not().isEmpty(),
    body("lastName").not().isEmpty(),
    body('password').isLength({ min: 8 }),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
      }),
    async (req,res) => {
        const errors = validationResult(req);
        try {
            if(!errors.isEmpty()){
                throw errors;
            }
            const{confirmPassword,password, ...rest} = req.body;
            const user = await User.create({...rest, password: await encrypt(password)});
            const token = await encode(req.body.email);
            console.log(token);
            const newURl = url.resolve(BaseUrl,`token/${token}`);
            sendEmail(req.body.email,"Authentication Message For Registretion", `<a href="${newURl}"}">Click Here</a>`)
            res.send({msg:"Please go and check your email for authentication"});
        } catch(err) {
            if(err.name === "SequelizeUniqueConstraintError" ) {
                return res.send({msg: "You Already Have Accout"})
            }
            if(err.name === "SequelizeConnectionError" ) {
                return res.send({msg: "Something Went wrong try again"})
            }
            console.log(err);
            res.send({msg: err.errors.map(item => item.msg)})
        }
    }
);
module.exports = signUpRoute;