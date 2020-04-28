require("dotenv").config({ path: ".env" });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

const sgMail = require("@sendgrid/mail");

app.post("/send", (req, res) => {
  console.log(req.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: "calcmp@gmail.com",
    to: "calcmp@gmail.com",
    subject: "test",
    text: "test",
  };

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (err) {
      console.log(err);

      if (err.response) {
        console.log(err.response.body);
      }
    }
  })();
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
