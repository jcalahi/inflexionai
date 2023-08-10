const express = require("express");

const router = express.Router();

const transcribeAudio = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

router.post("/", transcribeAudio);

module.exports = router;
