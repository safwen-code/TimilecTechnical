const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from auth get user");
});

router.post("/", (req, res) => {
  res.send("hello from auth post user");
});

module.exports = router;
