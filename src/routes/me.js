const authenticateJWT = require("../authenticateJWT");
const express = require("express");
const router = express.Router();

// const newsController = require("../app/controllers/NewsController");
const MeController = require("../app/controllers/MeController");

// router.use("/search", authenticateJWT, SiteController.search);
router.get("/stored/courses", authenticateJWT, MeController.storedCourses);
// router.get("/", SiteController.welcome);

module.exports = router;
