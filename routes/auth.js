const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const safwenToken = config.get("safwenToken");
const { body, validationResult } = require("express-validator");
const User = require("../models/User.js");
const Auth = require("../Middelwares/auth/Auth.js");
router.get("/", Auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message)
    res.status(500).send("server Eroor");
  }
});

router.post(
  "/",
  [
    body("email", "email is require").isEmail(),
    body("password", "password is required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "invalid password" });
      }

      // match password
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid password" }] });
      }

      //send jwt
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
        return res.json({ token, email });
      });
    } catch (error) {
      console.error(error.message);
    }
  }
);

module.exports = router;
