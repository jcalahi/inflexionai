const express = require("express");

const router = express.Router();

router.use("/fileupload", require("./fileupload"));
router.use("/transcribe", require("./transcribe"));
router.use("/summary", require("./summary"));

module.exports = router;
