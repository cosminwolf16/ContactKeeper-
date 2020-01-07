const express = require("express");
const router = express.Router();

// @route        POST api/users
// @description  Register a user
// @acces        Public

router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
