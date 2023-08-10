const express = require("express");

const router = express.Router();

router.use("/transcribe", require("./transcribe"));
router.use("/fileupload", require("./fileupload"));

module.exports = router;
