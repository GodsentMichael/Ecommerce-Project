const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
console.log("CLOUDINARY NAME=>",process.env.CLOUDINARY_NAME)
console.log("CLOUDINARY KEY=>",process.env.CLOUDINARY_API_KEY)
console.log("CLOUDINARY SECRET=>",process.env.CLOUDINARY_API_SECRET)

module.exports = cloudinary;