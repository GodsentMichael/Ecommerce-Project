const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Godsent-storesDB connected successfuly with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
