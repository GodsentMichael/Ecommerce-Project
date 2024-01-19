const express = require('express');
const router = express.Router();
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
const { createCouponCode, getAllShopCoupons, deleteShopCoupon } = require('../controller/coupounCode');

router.post("/create-coupon-code",isSeller, createCouponCode);
router.get("/get-coupon/:id",isSeller,getAllShopCoupons)
router.delete("/delete-coupon/:id",isSeller,deleteShopCoupon)

module.exports = router;