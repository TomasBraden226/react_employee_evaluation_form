const mongoose = require("mongoose");

const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    name: String,
    main_dep_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainDepartment",
    },
    sub_dep_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubDepartment",
    },
  })
);

module.exports = Employee;
