const mongoose = require("mongoose");

const MainDepartment = mongoose.model(
  "MainDepartment",
  new mongoose.Schema({
    name: String
  })
);

module.exports = MainDepartment;
