const mongoose = require("mongoose");

const { Schema } = mongoose;
const {
    Types: { ObjectId }
  } = Schema;
const boardSchema = new Schema({
  // writer: {
  //   type: ObjectId,
  //   required: true,
  // },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // user_id: {
  //   type: String
  // },
  // user_pw: {
  //   type: String
  // },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Board", boardSchema);
