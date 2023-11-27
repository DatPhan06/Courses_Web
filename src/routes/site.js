const authenticateJWT = require("../authenticateJWT");
const express = require("express");
const router = express.Router();

// const newsController = require("../app/controllers/NewsController");
const SiteController = require("../app/controllers/SiteController");

// router.use("/search", authenticateJWT, SiteController.search);
router.use("/home", authenticateJWT, SiteController.home);
router.use("/", SiteController.welcome);

module.exports = router;
