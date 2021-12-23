const path = require("path")
const express = require("express");
const editeProfileRoute = express.Router();
const multer = require("multer");
const { body, validationResult } = require('express-validator');
const upload = require("../helpers/uploadfiles")

const {User} = require("../database/models/index");

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
editeProfileRoute.post("/editprofileimage",   (req, res,) => {
    upload(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.send({msg: "Image maximum size is 2 megabyte"})
          }
        console.log(err)
         if (err) {
          return res.send({msg: err});
          
        }
        try {
            const profileImageUpdate = await User.update({photo: req.file.path},{where:{id: req.session.userId}});
            return res.json({ msg: "success" });
        } catch(err) {
            console.log(err)
            res.send({msg: "Something get wrong please try again"})
        }
        
    })
})
module.exports = editeProfileRoute;