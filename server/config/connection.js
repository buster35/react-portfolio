const mongoose = require("mongoose");

//Wrap mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Export our db connection
module.exports = mongoose.connection;
