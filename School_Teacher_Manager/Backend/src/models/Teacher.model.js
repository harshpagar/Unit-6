const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    sub: { type: String, required: true },
    section: [{ type: String, required: true }],
    grade: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("class", classSchema);