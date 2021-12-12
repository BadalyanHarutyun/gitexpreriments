const express = require("express");
const session = require("express-session");
const profileRoute = express.Router();
const User = require("../database/models/index");
profileRoute.get("/profile", async (req, res) => {
    if(!req.session.userId) {
        return res.send({msg: "/"});
    }
    try {
        console.log(req.session.userId)
        const user = await User.findOne({raw: true, where:{id: req.session.userId}});
        const {firstName, id, lastName, email, photo, ...rest} = user;
        console.log({firstName, lastName, email, photo});
        res.send({id, firstName, lastName, email, photo});
    } catch(err) {
        console.log(err)
    return res.send({msg: "/"});
    }
});
module.exports = profileRoute;