const express = require('express');
const router = express.Router();
const { createWithdrawalReq, getAllWithdrawalReq, updateWithdrawalReq  } = require('../controller/withdraw');
const { isAuthenticated, isSeller, isAdmin } = require("../middleware/auth");

router.post("/create-withdraw-request",isSeller,createWithdrawalReq)
router.get("/get-all-withdraw-request",isAuthenticated,isAdmin("Admin"), getAllWithdrawalReq),
router.put("/update-withdraw-request/:id", isAuthenticated, isAdmin("Admin"), updateWithdrawalReq),


module.exports = router;