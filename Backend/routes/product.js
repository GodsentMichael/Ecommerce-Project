const express = require('express');
const router = express.Router();
const { createProduct, getAllShopProducts, getAllProducts, deleteShopProduct, makeReview, adminGetAllProducts } = require('../controller/product');

router.post("/create-product", createProduct);
router.get("/get-all-products-shop/:id", getAllShopProducts)
router.delete("/delete-shop-product/:id",isSeller,deleteShopProduct)
router.get("/get-all-products", getAllProducts)
router.put("/create-new-review", isAuthenticated, makeReview)
router.get("/admin-all-products",isAuthenticated, isAdmin("Admin"), adminGetAllProducts),

module.exports = router;