const express = require("express");
const multer = require("multer");
const fs = require("fs/promises");

const router = express.Router();
const upload = multer();

const fileUpload = async (req, res, next) => {
  try {
    await fs.writeFile("server/audio/recording.webm", req.file.buffer, {
      flag: "w+",
    });
    return res.json({ filename: "recording.webm" });
  } catch (err) {
    console.error("An error encountered while uploading the audio.");
    next(err);
  }
};

router.post("/", upload.single("recording"), fileUpload);

module.exports = router;
