const express = require("express");
const users = require("./mock_data.json");
const { loremIpsum } = require("lorem-ipsum");

const router = express.Router();

const getTestimonials = async (req, res, next) => {
  try {
    const usersWithContent = users.map((user) => {
      return {
        ...user,
        content: loremIpsum({
          count: Math.floor(Math.random() * 4) + 1,
        }),
      };
    });
    return res.json({ users: usersWithContent });
  } catch (err) {
    next(err);
  }
};

router.get("/", getTestimonials);

module.exports = router;
