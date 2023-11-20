const express = require('express');
const router = express.Router();
const { registerUser, activateUser, loginUser, getUser, logOutUser, updateUser, updateAvatar } = require('../controller/user');
const { isAuthenticated } = require('../middleware/auth');

router.post("/create-user",  registerUser);
router.post("/activation", activateUser);
router.post("/login-user", loginUser);
router.get("/getuser",isAuthenticated, getUser);
router.get("/logout", isAuthenticated,logOutUser)
router.put("/update-user-info", isAuthenticated,updateUser)
router.put("/update-avatar", isAuthenticated, updateAvatar)
  



module.exports = router;