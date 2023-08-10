const express = require("express");
const dotenv = require("dotenv");
const multer = require("multer");
const fs = require("fs/promises");
const createReadStream = require("fs").createReadStream;
const { Configuration, OpenAIApi } = require("openai");

const upload = multer();
const router = express.Router();

dotenv.config();

const transcribeAudio = async (req, res, next) => {
  try {
    await fs.writeFile("server/audio/recording.webm", req.file.buffer, {
      flag: "w+",
    });

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const { data } = await openai.createTranscription(
      createReadStream("server/audio/recording.webm"),
      "whisper-1"
    );

    return res.json({ text: data.text });
  } catch (err) {
    console.error("An error encountered while uploading the audio.");
    next(err);
  }
};

router.post("/", upload.single("recording"), transcribeAudio);

module.exports = router;
