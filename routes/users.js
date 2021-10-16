const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from get users");
});

router.post("/", (req, res) => {
  res.send("hello from post users");
});

module.exports = router;
