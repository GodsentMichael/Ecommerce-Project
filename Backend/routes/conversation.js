const express = require('express');
const { createNewConversation, getAllSellerCoversation, getAllUserConversations, updateLastMessage } = require('../controller/conversation');
const { isAuthenticated, isAdmin, isSeller } = require('../middleware/auth');
const router = express.Router();

router.post("/create-new-conversation", createNewConversation)
router.get("/get-all-conversation-seller/:id", isSeller, getAllSellerCoversation)
router.get("/get-all-conversation-user/:id", isAuthenticated, getAllUserConversations)
router.put("/update-last-message/:id", updateLastMessage)

module.exports = router;