const express = require("express");
const editeProfileRoute = express.Router();

const { body, validationResult } = require('express-validator');

const User = require("../database/models/index");

editeProfileRoute.post("/editprofile", body("email"), body("lastName").not().isEmpty(), body("firstName").not().isEmpty(), async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw errors.errors.map(item => item.msg)
        }
        if(req.body.email === req.session.userEmail) {
            const {email, ...rest} = req.body;
            const updatedUser = await User.update({...rest},{where:{id: req.session.userId}});
            return res.send({msg: "success"});
        }

        try {
            const updatedUser = await User.update({...req.body},{where:{id: req.session.userId}});
            return res.send({msg: "success"});

        } catch(err) {
            console.log(err);
            return res.send({msg: "Please try another email"});
        }
    } catch(err) {
        console.log(err);
       return res.send({msg: err});
    }

})
module.exports = editeProfileRoute;