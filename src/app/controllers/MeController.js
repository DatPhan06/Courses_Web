const { sequelize, DataTypes } = require("./../../sequelize"); // Import cấu hình từ tệp sequelize.js
const Course = require("../models/Courses")(sequelize, DataTypes);

const authenticateJWT = require("../../authenticateJWT");

class MeController {
  // [GET] /home
  static async home(req, res) {
    async function getAllTasks() {
      try {
        const courses = await sequelize.query("SELECT * FROM courses", {
          type: sequelize.QueryTypes.SELECT,
          raw: true,
        });
        return courses;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        // res.status(500).json({ error: "Lỗi khi lấy danh sách công việc" });
      }
    }
    var data = await getAllTasks();
    // res.json({ data });
    res.render("home", { data });
  }

  // [GET] /search
  static search(req, res) {
    res.render("search");
  }

  // [GET] /me/stored/courses
  static async storedCourses(req, res) {
    async function getAllTasks() {
      try {
        const courses = await sequelize.query("SELECT * FROM courses", {
          type: sequelize.QueryTypes.SELECT,
          raw: true,
        });
        return courses;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        // res.status(500).json({ error: "Lỗi khi lấy danh sách công việc" });
      }
    }
    var data = await getAllTasks();
    res.render("me/stored-courses", { data });
  }
}

module.exports = MeController;
