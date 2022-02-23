const  mongoose = require("mongoose")

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }},
      
    {
      versionKey:false,
      timestamps:true
    }
);

module.exports = model("admin", adminSchema);