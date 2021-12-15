const express = require("express");
const messageRoute = express.Router();
const { Op } = require("sequelize");
const {Message} = require('../database/models/index');
const message = require("../database/models/message");
messageRoute.post("/sendmessage", async (req, res, next) => {
    try {
        const messageObj = req.body.receiverId
        console.log("receiverId",messageObj )
        const newMessage = await Message.create({name: req.body.name, receiverId: req.body.receiverId, data: req.body.data, userId: req.session.userId});
        //console(newMessage);
        next();
    } catch(err) {
        console.log(err);
        return;
    }
})
messageRoute.post("/getmessage", async (req, res, next) => {
    try {
        const messageObj = req.body.receiverId
        console.log("receiverId",messageObj )
        const newMessage = await Message.findAll({
            raw: true,
            where: {
                [Op.or]:[
                {receiverId: req.body.receiverId,
              userId: req.session.userId},
              {receiverId: req.session.userId,
                userId: req.body.receiverId},
                ]
            }
          });
        console.log(newMessage);
        res.send(newMessage)
    } catch(err) {
        console.log(err);
        return;
    }
})
module.exports = messageRoute;