const express = require("express");
const router = express.Router();

// For /users/register
router.get("/register", (req, res, next) => {
  res.send("REGISTER");
});

// For /users/authentication
router.post("/auth", (req, res, next) => {
  res.send("AUTHENTICATE");
});

// For /users/profile
router.get("/profile", (req, res, next) => {
  res.send("PROFILE");
});

// For /users/validate
router.get("/validate", (req, res, next) => {
  res.send("VALIDATE");
});

module.exports = router;
