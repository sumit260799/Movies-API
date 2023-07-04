const mongoose = require("mongoose");

// MongoDB connection string
const uri =
  "mongodb+srv://mail2sumitjpg:Sumit90@cluster0.ifl16b4.mongodb.net/moviesDB";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event handlers for successful connection and error
db.on("connected", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
