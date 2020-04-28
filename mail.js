require("dotenv").config({ path: ".env" });
const sgMail = require("@sendgrid/mail");

const sendMail = (email, subject, message) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    from: "calcmp@gmail.com",
    to: "calcmp@gmail.com",
    subject,
    text: `From: ${email}\n\n ${message}`,
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
};

module.exports = sendMail;
