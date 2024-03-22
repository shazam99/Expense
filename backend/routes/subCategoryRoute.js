const express = require("express");
const router = express.Router();
const { addSub, getSub } = require("../controller/subCategoryController");
const validateToken = require("../middleware/jwtHandler");

router.route("/add").post(validateToken, addSub);
router.route("/get").get(validateToken, getSub);
// router.route("/remove").post(validateToken, removeCategory);
// router.route("/update").post(validateToken, updateCategory);

module.exports = router;