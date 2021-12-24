const express = require("express");
const messageRoute = express.Router();
const { Op } = require("sequelize");
const {Message} = require('../database/models/index');
const message = require("../database/models/message");
const multer = require("multer");
const upload = require("../helpers/uploadfiles")([".png", ".jpg", ".jpeg", ".mp4"])
messageRoute.post("/sendmessage", async (req, res, next) => {
    try {
        const messageObj = req.body.receiverId
        console.log("receiverId",messageObj )
        const newMessage = await Message.create({name: req.body.name, receiverId: req.body.receiverId, data: req.body.data, userId: req.session.userId, type: req.body.type});
        //console(newMessage);
        next();
    } catch(err) {
        console.log(err);
        return;
    }
})
messageRoute.post("/sendmessagefile", async (req, res, ) => {
    
        upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.send({msg: "Image maximum size is 2 megabyte"})
          }
        console.log(err)
         if (err) {
          return res.send({msg: err});
          
        }
        try {
            const newMessage = await Message.create({name: req.body.name, receiverId: req.body.receiverId, data: req.file.path, userId: req.session.userId, type: req.body.type});
            console.log(req.file)
            res.set({"Content-Length":`${req.file.size}`}).send({msg:req.file.path});
        } catch(err) {
            console.log(err);
            return;
        }
        
    })
        
        //console(newMessage);
        
   
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
        //console.log(newMessage);
        res.send(newMessage)
    } catch(err) {
        console.log(err);
        return;
    }
})
module.exports = messageRoute;