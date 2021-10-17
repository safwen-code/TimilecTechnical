const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Auth = require("../Middelwares/auth/Auth.js");
const Contact = require("../models/Contact.js");

router.get("/", Auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server Error");
  }
});

router.post("/", (req, res) => {
  res.send("hello from post contact");
});

router.put("/:id", (req, res) => {
  res.send("hello from update contact");
});

router.delete("/:id", (req, res) => {
  res.send("hello from delete contact");
});

module.exports = router;

module.exports = router;
