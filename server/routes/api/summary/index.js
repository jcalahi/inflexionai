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
          content:
            "Return the answer as JSON object. First, generate a title of the content provided. The title should be less than 5 words. Second, write a short summary of the content. The sentences should contain few words.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.2,
      top_p: 0.1,
      max_tokens: 256,
      n: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.json({ message: JSON.parse(data.choices[0].message.content) });
  } catch (err) {
    console.error("An error encountered while summarizing the text.");
    next(err);
  }
};

router.post("/", summarizeText);

module.exports = router;
