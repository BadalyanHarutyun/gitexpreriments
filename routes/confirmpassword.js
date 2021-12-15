const express = require("express");
const confirmPasswordRoute = express.Router()
const { body, validationResult } = require('express-validator');
const {User} = require("../database/models/index");
const {decode} = require("../helpers/encodeanddecodetoken");
const {encrypt} = require("../helpers/encryptandcomparepassword");
confirmPasswordRoute.get("/confirmpassword/:id", async (req, res) => {
    try {
    console.log(req.params)
    const decoded = await decode(req.params.id);
    res.send({msg: "success"});
    } catch(error) {
        res.send({msg:"error"});
    }

})
confirmPasswordRoute.post("/confirmpassword/:id",
    body('password').isLength({ min: 8 }),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Password confirmation does not match password');
        }
        return true;
      }),
    async (req, res) => {
        try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.send({msg:"Invalid password"});
        }
        const newPassword = await encrypt(req.body.password);
        const decoded = await decode(req.params.id);
        const user = await User.update({password: newPassword}, {where:{ email: decoded.data }});
        console.log(user);
        return res.send({msg: "success"});
        } catch(error) {
            console.log(error);
            res.send({msg:"error"});
        }

})
module.exports = confirmPasswordRoute;