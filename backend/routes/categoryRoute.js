const express = require("express");
const router = express.Router();
const { addCategory, getCategory, removeCategory,updateCategory } = require("../controller/categoryController");
const validateToken = require("../middleware/jwtHandler");

router.route("/add").post(validateToken, addCategory);
router.route("/get").get(validateToken, getCategory);
router.route("/remove").post(validateToken, removeCategory);
router.route("/update").post(validateToken, updateCategory);

module.exports = router;