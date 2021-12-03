const express = require("express");
const logOutRoute = express.Router();
logOutRoute.post("/logout", (req, res) => {
    req.session.destroy();
    res.send({msg: "success"});
})
module.exports = logOutRoute;