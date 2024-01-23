const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    origin: ["https://g-stores-multi-vendor-store.vercel.app/","http://localhost:5173"],
    credentials: true,
  })
);

// Register middlewares
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());


//Get PORT from config.
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

//TEST ROUTE
app.use("/test", (req, res) => {
  res.send("Welcome to G-stores API!");
});

//IMPORT ROUTES
const user = require('./routes/user');
const shop = require('./routes/shop');
const product = require('./routes/product');
const event = require('./routes/event');
const order = require('./routes/order');
const message = require('./routes/message');
const withdraw = require('./routes/withdraw');
const coupon = require('./routes/coupon');
const conversation = require('./routes/conversation');


// import routes
// const user = require("./controller/user");
// const shop = require("./controller/shop");
// const product = require("./controller/product");
// const event = require("./controller/event");
// const coupon = require("./controller/coupounCode");
// const payment = require("./controller/payment");
// const order = require("./controller/order");
// const conversation = require("./controller/conversation");
// const message = require("./controller/message");
// const withdraw = require("./controller/withdraw");

//DEFINE ROUTES
app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
// app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// THIS IS FOR ERROR HANDLING.
app.use(ErrorHandler);

module.exports = app;
