const express = require('express');
const router = express.Router();
const { registerUser } = require('../controller/user');
const { isAuthenticated } = require('../middleware/auth');

router.post("/create-user",  registerUser);
// router.post("/activation", activateUser);
// router.post("/login-user", loginUser);
// router.get("/getuser",isAuthenticated, getUser);



module.exports = router;