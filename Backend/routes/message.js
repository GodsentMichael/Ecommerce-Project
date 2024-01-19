const express = require("express");
const router = express.Router();
const { createNewMessage, getAllMessages } = require("../controller/message");
const { isAuthenticated } = require("../middleware/auth");

router.post("/create-new-message", createNewMessage);
router.get("/get-all-messages/:id", getAllMessages);

module.exports = router;