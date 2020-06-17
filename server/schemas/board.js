const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
  Types: { ObjectId }
} = Schema;
const boardSchema = new Schema({
  writer: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  views: {
    type: String,
    required: false
  },
  likeit: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model("Board", boardSchema);
