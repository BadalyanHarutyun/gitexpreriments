const path = require("path")
const express = require("express");
const editeProfileRoute = express.Router();

const { body, validationResult } = require('express-validator');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
    cloud_name: process.env.APIC_NAME,
    api_key: process.env.APIC_KEY,
    api_secret: process.env.APIC_SECRET,
  });
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "DEV",
    },
  });  
const upload = multer({ storage: storage,limits: { fileSize: 2097152 }, fileFilter: function (req, file, cb) {
    const extension = path.extname(file.originalname).toLowerCase();
    const allowedImageTypes = [".png", ".jpg", ".jpeg"]
    console.log(extension === ".png")
    if ( allowedImageTypes.indexOf(extension) === -1) {

       return cb('Invalid image type', false);
    }
    return cb(null, true)
    
}, }).single("picture");

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