const express = require("express");
const router = express.Router();
const { registerUser, loginUser, updateUser } = require("../controller/userController");
const validateToken = require("../middleware/jwtHandler");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update").post(validateToken, updateUser);

module.exports = router;