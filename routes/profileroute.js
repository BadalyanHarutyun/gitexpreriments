const express = require("express");
const profileRoute = express.Router();
const User = require("../database/models/index");
profileRoute.get("/profile", async (req, res) => {
    if(!req.session.userId) {
        return res.send({msg: "/"});
    }
    try {
        const user = await User.findOne({raw: true, where:{id: req.session.userId}});
        const {firstName, lastName, email, ...rest} = user;
        console.log({firstName, lastName, email})
        res.send({firstName, lastName, email});
    } catch(err) {
    return res.send({msg: "/"});
    }
});
module.exports = profileRoute;