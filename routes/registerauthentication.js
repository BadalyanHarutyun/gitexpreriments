const express = require("express");
const {decode} = require("../helpers/encodeanddecodetoken");
const {User} = require("../database/models/index");
const {BaseUrl} = require("../config");
const registerAuthRoute = express.Router();
registerAuthRoute.get("/:id", async (req, res) => {
    try {
        console.log(req.params);
    const decoded = await decode(req.params.id);
    console.log(decoded)
    const user = await User.update({authenticated: true}, {where:{email: decoded.data}})
    res.send(`<a href ="${BaseUrl}" style="position:absolute;right:50%;top:50%"> You can login</a>`)
    } catch(err) {
        console.log(err)
        res.send("<h1>token expired</h1>");
    }

})
module.exports = registerAuthRoute;