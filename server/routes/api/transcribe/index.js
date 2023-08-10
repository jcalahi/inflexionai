const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const fs = require("fs");
const { Configuration, OpenAIApi } = require("openai");

const upload = multer();
const router = express.Router();

dotenv.config();

const transcribeAudio = async (req, res, next) => {
  try {
    // await fs.writeFile("server/audio/recording.webm", req.file.buffer, {
    //   flag: "w+",
    // });

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const transcript = await openai.createTranscription(
      fs.createReadStream("server/audio/recording.webm"),
      "whisper-1"
    );
    console.log(transcript);

    return res.json({ filename: "recording.webm" });
  } catch (err) {
    console.error("An error encountered while uploading the audio.");
    next(err);
  }
};

router.post("/", upload.single("recording"), transcribeAudio);

module.exports = router;
