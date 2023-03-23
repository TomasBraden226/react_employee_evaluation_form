const mongoose = require("mongoose");

const SubDepartment = mongoose.model(
  "SubDepartment",
  new mongoose.Schema({
    name: String,
    main_dep_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainDepartment",
    }
  }, { timestamps: true })
);

module.exports = SubDepartment;
