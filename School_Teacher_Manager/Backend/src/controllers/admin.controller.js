const express = require("express");

const Admin = require("../models/Admin.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(200).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const admin1 = await Admin.find().lean().exec();
    return res.status(201).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const admin = await Admin.findById().lean().exec();
    res.send(201).send(admin);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});



module.exports = router;