const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from get contact");
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
