const express = require("express");
const dotenv = require("dotenv");
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
            'First, generate a title based from the context or information of the content provided. It must be less than 5 words. Second, in few words, write a summary. Third, only provide a  RFC8259 compliant JSON response  following this format without deviation. { "title": "title", "summary": "summary" }',
        },
        {
          role: "user",
          content: text,
        },
      ],
      temperature: 0.2,
      top_p: 0.1,
      max_tokens: 256,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.json({
      createdAt: data.created,
      note: data.choices[0].message.content,
      transcript: text,
    });
  } catch (err) {
    console.error("An error encountered while summarizing the text.");
    next(err);
  }
};

router.post("/", summarizeText);

module.exports = router;
