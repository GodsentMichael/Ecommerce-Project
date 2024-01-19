const express = require("express");
const router = express.Router();
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");
const { createOrder, getAnOrderById, sellerGetAllOrders, updateOrderStatus, acceptRefundRequest, adminGetAllOrders } = require("../controller/order");

router.post("/create-order", createOrder);
router.get("/get-all-orders/:userId", getAnOrderById);
router.get("/get-seller-all-orders/:shopId",sellerGetAllOrders)
router.put("/update-order-status/:id", isSeller, updateOrderStatus);
router.put("/order-refund-success/:id",isSeller, acceptRefundRequest);
router.get("/admin-all-orders",isAuthenticated,isAdmin("Admin"),adminGetAllOrders);

module.exports = router;