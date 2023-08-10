const express = require("express");
const fs = require("fs");
const multer = require("multer");
const upload = multer();

const router = express.Router();

const uploadAudio = async (req, res, next) => {
  try {
    const configOptions = { flag: "w+" };
    fs.writeFileSync(
      "server/audio/recording.webm",
      req.file.buffer,
      configOptions
    );
    return res.json({ filename: "recording.webm" });
  } catch (err) {
    console.error("An error encountered while uploading the audio.");
    next(err);
  }
};

router.post("/", upload.single("recording"), uploadAudio);

module.exports = router;
