const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const sendMail = require("./public/backend/scripts/mail.js");
const downloadFile = require("./public/backend/scripts/download-cv.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/frontend/index.html"));
});

app.post("/send", (req, res) => {
  const { email, subject, message } = req.body;
  console.log(email);
  console.log(subject);
  console.log(message);

  //sendMail(email, subject, message);
  res.redirect("/");
});

app.get("/download", (req, res) => {
  console.log("DOWNLOAD");
  downloadFile();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
