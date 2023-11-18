const { sequelize, DataTypes } = require("./../../sequelize"); // Import cấu hình từ tệp sequelize.js
const Course = require("../models/Courses")(sequelize, DataTypes);

class SiteController {
  // [GET] /home
  static async home(req, res) {
    async function getAllTasks() {
      try {
        const courses = await Course.findAll({ raw: true });
        return courses;
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        // res.status(500).json({ error: "Lỗi khi lấy danh sách công việc" });
      }
    }
    var data = await getAllTasks();

    res.render("home", { data });
  }

  // [GET] /search
  static search(req, res) {
    res.render("search");
  }
}

module.exports = SiteController;
