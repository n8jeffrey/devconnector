// USer specific content. Location, expereinces etc.
// authetnticationetc.
const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc Tests profile route.
// @access public
router.get("/test", (req, res) => res.json({ msg: "Profile is Working!" }));

module.exports = router;
