const express = require("express");
const dotenv = require("dotenv");
const createReadStream = require("fs").createReadStream;
const { Configuration, OpenAIApi } = require("openai");

const router = express.Router();
dotenv.config();

const summarizeText = async (req, res, next) => {
  try {
    const { text } = req.body;
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Simplify the text",
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.8,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.json({ summary: data.choices });
  } catch (err) {
    console.error("An error encountered while summarizing the text.");
    next(err);
  }
};

router.post("/", summarizeText);

module.exports = router;
