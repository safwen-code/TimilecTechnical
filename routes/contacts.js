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

router.post(
  "/",
  Auth,
  [body("name", "please give me a name").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    console.log(req.user);
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      console.log("newContact", newContact);
      await newContact.save();
      return res.status(200).json(newContact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

router.put("/:id", Auth, async (req, res) => {
  try {
    console.log(req.user);
    const { name, email, phone, type } = req.body;

    let contact = await Contact.findByIdAndUpdate(req.params.id, {
      $set: { ...req.body },
      $currentDate: { lastModified: true },
    });
    if (req.user.id !== contact.user.toString()) {
      res.status(404).json({ msg: "no authorization" });
    }
    await contact.save();

    let Contacts = await Contact.find();
    res.status(200).json(Contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error.message);
  }
});

router.delete("/:id", Auth, async (req, res) => {
  console.log(req.user);
  console.log(req.params.id);
  try {
    let contact = await Contact.findById(req.params.id);
    console.log(contact);
    if (!contact) {
      res.status(400).json({ msg: `no contact with this ${req.params.id}` });
    }
    if (req.user.id !== contact.user.toString()) {
      res.status(404).json({ msg: " no authorization " });
    }

    await contact.remove();
    res.status(200).json({ msg: " contact is removed", contact });
  } catch (error) {
    console.log(error.message);
    res.status(500).json("server error");
  }
  res.send("hello from delete contact");
});

module.exports = router;

module.exports = router;
