const express = require("express");

const Classes = require("../models/class.model");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const classes = await Classes.create(req.body);
    res.status(200).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const classes = await Classes.find().lean().exec();
    return res.status(201).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const classes = await Classes.findById().lean().exec();
    res.send(201).send(classes);
  } catch (e) {
    return res.status(500).json({ status: "Failed", Message: e.message });
  }
});




module.exports = router;