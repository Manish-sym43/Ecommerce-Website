const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//MongoDb Connection
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDb Connected Successfully");
}).catch((err) => {
    console.log(err);
});

// Middlewares
app.use(cors());
app.use(express.json()); //for handling JSON body

// Root route
app.get("/", (req, res) => {
    res.send("Hello, I am Root");
});

// Server listen
app.listen(PORT, () => {
    console.log(`Successfully listening on PORT ${PORT}`);
});
