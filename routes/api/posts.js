// authetnticationetc.
const express = require("express");
const router = express.Router();

// @route GET api/post/test
// @desc Tests post route.
// @access public
router.get("/test", (req, res) => res.json({ msg: "posts is Working!" }));

module.exports = router;
