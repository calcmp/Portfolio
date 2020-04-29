const path = require("path");
const download = require("download");
const fs = require("fs");

const DOWNLOAD_DIR = path.join(
  process.env.HOME || process.env.USERPROFILE,
  "downloads/"
);

const downloadFile = async (res) => {
  console.log("Download:)");

  await download(
    "http://localhost:3000/public/backend/assets/Callum-Penny-CV.pdf",
    `${DOWNLOAD_DIR}`
  );
};

module.exports = downloadFile;
