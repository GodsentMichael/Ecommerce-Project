const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const Event = require("../model/event");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller, isAdmin, isAuthenticated } = require("../middleware/auth");
const { createEvent, getAllEvents, getAllShopEvents, deleteShopEvent } = require("../controller/event");

router.post("/create-event", createEvent);
router.get("/get-all-events", getAllEvents);
router.get("/get-all-events/:id", getAllShopEvents);
router.delete("/delete-shop-event/:id", deleteShopEvent);


module.exports = router