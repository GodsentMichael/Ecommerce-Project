const express = require('express');
const router = express.Router();
const { createShop, activateShop, loginShop, getShop, logoutShop, getShopInfo, updateShopImg, updateSellerInfo,adminGetAllSellers ,adminDeleteSellerById, updatePaymentMethods, deleteWithdrawalMethods  } = require('../controller/shop');
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");

router.post("/create-shop", createShop )
router.post("/activation", activateShop )
router.post("/login-shop", loginShop)
router.get("/getSeller", isSeller, getShop);
router.get("/logout", isSeller, logoutShop)
router.get("/get-shop-info/:id", getShopInfo)
router.put("/update-shop-avatar", isSeller, updateShopImg)
router.put("/update-seller-info", isSeller, updateSellerInfo)
router.get("/admin-all-sellers",isAuthenticated, isAdmin("Admin"), adminGetAllSellers),
router.delete("/delete-seller/:id",isAuthenticated, isAdmin("Admin"), adminDeleteSellerById),
router.put("/update-payment-methods", isSeller, updatePaymentMethods)
router.delete("/delete-withdraw-method/", isSeller, deleteWithdrawalMethods)

module.exports = router;