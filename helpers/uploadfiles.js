const path = require("path")
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
module.exports = upload;