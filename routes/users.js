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



module.exports = router;
