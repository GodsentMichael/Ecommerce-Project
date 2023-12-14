const express = require('express');
const router = express.Router();
const { createShop, activateShop, loginShop, getShop  } = require('../controller/shop');
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");

router.post("/create-shop", createShop )
router.post("/activation", activateShop )
router.post("/login-shop", loginShop)
router.get("/getSeller", isSeller, getShop);

module.exports = router;