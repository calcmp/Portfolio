const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sendMail = require("./mail.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post("/send", (req, res) => {
  const { email, subject, message } = req.body;
  console.log(email);
  console.log(subject);
  console.log(message);
  res.redirect("/");
  //sendMail(email, subject, message);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
