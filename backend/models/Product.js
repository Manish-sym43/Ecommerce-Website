const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4, //every product gets a UUID instead of Mongo's ObjectId
    },
    name: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    inStock: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
