const express = require("express");
const connectDB = require("./config/connectDB.js");

const users = require("./routes/users");
const contacts = require("./routes/contacts");
const auth = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

//init middelware
app.use(express.json({ extended: false }));

app.use("/users", users);
app.use("/auth", auth);
app.use("/contacts", contacts);

app.listen(PORT, () => {
  console.log(`server is work in ${PORT}`);
});
