const multer = require("multer");
const cloudinary = require("./cloudUploads");

// const storage = multer.memoryStorage();
// const upload = multer({ storage });
const storage = multer.diskStorage({ dest: "./uploads" });
const upload = multer({ storage });

const uploadToCloudinary = async(file) => {
    try {
        const result = await cloudinary.uploader.upload(file.path, {
            folder: "avatars",
            use_filename: true,
        });
        // console.log("result=>", result);
        return result.secure_url;
    } catch (error) {
        // console.log("uploadError=>", error);
        throw new Error(`Error uploading image to Cloudinary: ${error.message}`);
    }
};

module.exports = { upload, uploadToCloudinary };