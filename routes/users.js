const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const config = require("config");
const safwenToken = config.get("safwenToken");

const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("hello from get users");
});

router.post(
  "/",
  [
    body("name", " is require").not().isEmpty(),
    body("password", " is require").isLength({ min: 5 }),
    body("email", "is require").isEmail(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, password, email } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "user All ready exist" });
      }
      user = new User({
        name,
        email,
        password,
      });

      const salt = bcrypt.genSaltSync(10);
      user.password = bcrypt.hashSync(password, salt);
      const payload = {
        user: {
          id: user.id,
          name: user.name,
          password: user.password,
          email: user.email,
        },
      };
      jwt.sign(payload, safwenToken, { expiresIn: "1h" }, (err, token) => {
        if (err) throw err;
        return res.json({ token, name, email });
      });
      await user.save();
    } catch (err) {
      console.error(err.message);
    }
  }
);

module.exports = router;
