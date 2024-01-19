const express = require('express');
const router = express.Router();
const { registerUser, activateUser, loginUser, getUser, logOutUser, updateUser, updateAvatar, updateUserAddresses, deleteUserAddress, updateUserPassword, userInfo, adminGetUsers, adminDeleteUser  } = require('../controller/user');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

router.post("/create-user",  registerUser);
router.post("/activation", activateUser);
router.post("/login-user", loginUser);
router.get("/getuser",isAuthenticated, getUser);
router.get("/logout", isAuthenticated,logOutUser)
router.put("/update-user-info", isAuthenticated,updateUser)
router.put("/update-avatar", isAuthenticated, updateAvatar)
router.put("/update-user-addresses", isAuthenticated, updateUserAddresses)
router.delete("/delete-user-address/:id", isAuthenticated, deleteUserAddress)
router.put("/update-user-password", isAuthenticated, updateUserPassword)
router.get("/user-info/:id", userInfo)
router.get("/admin-all-users", isAuthenticated, isAdmin("Admin"), adminGetUsers)
router.delete("/delete-user/:id", isAuthenticated, isAdmin("Admin"), adminDeleteUser)
  



module.exports = router;