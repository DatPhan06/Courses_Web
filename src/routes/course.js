const express = require("express");
const router = express.Router();

const CourseController = require("../app/controllers/CourseController");

router.use("/:id", CourseController.show);

module.exports = router;
