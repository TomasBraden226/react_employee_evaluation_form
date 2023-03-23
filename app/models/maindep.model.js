const mongoose = require("mongoose");

const MainDepartment = mongoose.model(
  "MainDepartment",
  new mongoose.Schema({
    name: String
  }, { timestamps: true })
);

module.exports = MainDepartment;
