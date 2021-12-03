const url = require("url");
const express = require("express");
const forgetPasswordRoute = express.Router();
const {BaseUrl} = require('../config.js');
const {encode} = require("../helpers/encodeanddecodetoken");
const { body, validationResult } = require('express-validator');
const sendEmail = require("../helpers/sendemail");
const User = require("../database/models/index");

forgetPasswordRoute.post("/forgetpassword", body("email").isEmail(), async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw "Invalid email";
        }
        const user = await User.findOne({raw: true, where:{email: req.body.email}});
        if(user === null) {
            throw "Invalid email";
        }
        const token = await encode(req.body.email);
        console.log(token);
        const newURl = url.resolve(BaseUrl,`confirmpassword/${token}`);
        sendEmail(req.body.email,"Authentication Message For new Password", `<a href="${newURl}"}">Click Here</a>`);
        res.send({msg:"success"})
    } catch(error) {
        res.send({msg: error});
    }



})
module.exports = forgetPasswordRoute;