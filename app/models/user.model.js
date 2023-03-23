const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    Creteria: [
      {
        emp_id :{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role",
        },
        title: {
          type: String,
          default: "Undefined"
        },
        grade: {
          type: Number,
          default: 5
        }
      }
    ] 
  })
);

module.exports = User;
