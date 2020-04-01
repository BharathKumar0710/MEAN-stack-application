const express = require("express");
const router = express.Router();

// For /users/register
router.get("/register", (req, res, next) => {
  res.send("REGISTER");
});

module.exports = router;