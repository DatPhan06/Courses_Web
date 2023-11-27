const authenticateJWT = require("../authenticateJWT");
const authRouter = require("./auth");
const newsRouter = require("./news");
const siteRouter = require("./site");
const courseRouter = require("./course");

function route(app) {
  app.use("/course", authenticateJWT, courseRouter);
  app.use("/auth", authRouter);
  app.use("/news", newsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
