const { sequelize, DataTypes } = require("./../../sequelize"); // Import cấu hình từ tệp sequelize.js
const Course = require("../models/Courses");

class SiteController {
  // [GET] /home
  static async home(req, res) {
    let courses = []; // Đưa khai báo ra khỏi khối try

    try {
      courses = await Course.findAll();
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
      // res.status(500).json({ error: "Lỗi khi lấy danh sách công việc" });
    }

    courses = courses.map((item) => item.toJSON());
    res.render("home", { courses });
  }

  // [GET] /search
  static search(req, res) {
    res.render("search");
  }
}

module.exports = SiteController;
