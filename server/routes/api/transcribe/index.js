const express = require("express");
const dotenv = require("dotenv");
const createReadStream = require("fs").createReadStream;
const { Configuration, OpenAIApi } = require("openai");

const router = express.Router();
dotenv.config();

const transcribeAudio = async (req, res, next) => {
  try {
    const { fileName } = req.body;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);
    const { data } = await openai.createTranscription(
      createReadStream(`server/audio/${fileName}`),
      "whisper-1"
    );

    return res.json({ text: data.text });
  } catch (err) {
    console.error("An error encountered while transcribing the file content.");
    next(err);
  }
};

router.post("/", transcribeAudio);

module.exports = router;
