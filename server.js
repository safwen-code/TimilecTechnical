const express = require("express");
const users = require("./routes/users");
const contacts = require("./routes/contacts");
const auth = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/users", users);
app.use("/auth", auth);
app.use("/contacts", contacts);

app.listen(PORT, () => {
  console.log(`server is work in ${PORT}`);
});
