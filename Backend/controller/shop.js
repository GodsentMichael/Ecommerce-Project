const express = require("express");
const path = require("path");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const Shop = require("../model/shop");
const Product = require("../model/product")
const cloudinary = require("cloudinary");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const sendShopToken = require("../utils/shopToken");

// CREATE SHOP
exports.createShop = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name,email,password,avatar,zipCode,address,phoneNumber, } = req.body;
    // console.log("REQ BODY=>", req.body);

    if (!name || !email || !password || !avatar || !zipCode || !address || !phoneNumber) {
      return next(new ErrorHandler("Please provide the all fields!", 400));
    }
    const sellerEmail = await Shop.findOne({ email });
   
    if (sellerEmail) {
      return next(new ErrorHandler("User already exists", 400));
    } 

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
    });


    const seller = {
      name: req.body.name,
      email: email,
      password: req.body.password,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      zipCode: req.body.zipCode,
    };

    const activationToken = createActivationToken(seller);
    // const activationUrl = `http://localhost:5173/activation?activation_token=${activationToken}`;

    const activationUrl = `http://localhost:5173/seller/activation?activation_token=${activationToken}`;
    // const activationUrl = `https://eshop-pyri.vercel.app/seller/activation/${activationToken}`;
    try {
      await sendMail({
        email: seller.email,
        subject: "Activate Your Shop",
        message: `Hello ${seller.name}, please click on the link to activate your shop: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `please check your email:- ${seller.email} to activate your shop!`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    console.error("Error=>", error);
    return next(new ErrorHandler(error.message, 400));
  }
});

// CREATE ACTIVATION TOKEN
const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// ACTIVATE SHOP
exports.activateShop =  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newSeller = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newSeller) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar, zipCode, address, phoneNumber } =
        newSeller;

      let seller = await Shop.findOne({ email });

      if (seller) {
        return next(new ErrorHandler("User already exists", 400));
      }

      seller = await Shop.create({
        name,
        email,
        avatar,
        password,
        zipCode,
        address,
        phoneNumber,
      });

      sendShopToken(seller, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })


// LOGIN SHOP
exports.loginShop = catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please provide all the fields!", 400));
      }

      const user = await Shop.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exist!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendShopToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

// TO LOAD UP SHOP
exports.getShop = catchAsyncErrors(async (req, res, next) => {
    try {
      const seller = await Shop.findById(req.seller._id);

      if (!seller) {
        return next(new ErrorHandler("User doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

// LOGOUT FROM SHOP
exports.logoutShop  =  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("seller_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out successful!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })

// GET SHOP INFO
exports.getShopInfo =  catchAsyncErrors(async (req, res, next) => {
    try {
      const shop = await Shop.findById(req.params.id);
      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

// TO UPDATE SHOP PROFILE IMG

exports.updateShopImg = catchAsyncErrors(async (req, res, next) => {
    try {
      let existsSeller = await Shop.findById(req.seller._id);
      if(!existsSeller){
        return next(new ErrorHandler("Shop doesn't exist", 400));
      }

        const imageId = existsSeller.avatar.public_id;

        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
          folder: "avatars",
          width: 150,
        });

        existsSeller.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };

  
      await existsSeller.save();

      res.status(200).json({
        success: true,
        seller:existsSeller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

//TO UPDATE SELLER INFO
exports. updateSellerInfo =  catchAsyncErrors(async (req, res, next) => {
    try {
      const { name, description, address, phoneNumber, zipCode } = req.body;

      const shop = await Shop.findOne(req.seller._id);

      if (!shop) {
        return next(new ErrorHandler("User not found", 400));
      }

      shop.name = name;
      shop.description = description;
      shop.address = address;
      shop.phoneNumber = phoneNumber;
      shop.zipCode = zipCode;

      await shop.save();

      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });


// GET ALL SELLERS --- ADMIN
exports.adminGetAllSellers = catchAsyncErrors(async (req, res, next) => {
    try {
      const sellers = await Shop.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        sellers,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });


// DELETE SELLER BY ID --- ADMIN
// exports.adminDeleteSellerById = catchAsyncErrors(async (req, res, next) => {
//     try {
//       const seller = await Shop.findById(req.params.id).populate('product');

//       if (!seller) {
//         return next(
//           new ErrorHandler("Seller is not available with this id", 400)
//         );
//       }

//       await Shop.findByIdAndDelete(req.params.id);

//       res.status(201).json({
//         success: true,
//         message: "Seller deleted successfully!",
//       });
//     } catch (error) {
//       return next(new ErrorHandler(error.message, 500));
//     }
// });

exports.adminDeleteSellerById = catchAsyncErrors(async (req, res, next) => {
  try {
    // Find the seller and populate the 'product' field
    const seller = await Shop.findById(req.params.id).populate('products');

    if (!seller) {
      return next(new ErrorHandler("Seller is not available with this id", 400));
    }

    // Extract product IDs from the populated 'product' field
    const productIds = seller.products.map(product => product._id);

    // Delete the seller
    await Shop.findByIdAndDelete(req.params.id);

    // Delete the associated products
    await Product.deleteMany({ _id: { $in: productIds } });

    res.status(201).json({
      success: true,
      message: "Seller and associated products deleted successfully!",
    });
  } catch (error) {
    console.log("ADMIN SELLER DELETE ERROR=>", error);
    return next(new ErrorHandler(error.message, 500));
  }
});


// UPDATE SELLER WITHDRAW METHODS --- SELLERS

exports.updatePaymentMethods = catchAsyncErrors(async (req, res, next) => {
    try {
      const { withdrawMethod } = req.body;

      const seller = await Shop.findByIdAndUpdate(req.seller._id, {
        withdrawMethod,
      });

      res.status(201).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });

// DELETE SELLER WITHDRAW METHODS --- ONLY SELLERS

exports.deleteWithdrawalMethods = catchAsyncErrors(async (req, res, next) => {
    try {
      const seller = await Shop.findById(req.seller._id);

      if (!seller) {
        return next(new ErrorHandler("Seller not found with this id", 400));
      }

      seller.withdrawMethod = null;

      await seller.save();

      res.status(201).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  });


