const { sequelize, DataTypes } = require("./../../sequelize"); // Import cấu hình từ tệp sequelize.js
const Course = require("../models/Courses")(sequelize, DataTypes);

class CourseController {
  // [GET] /show/:id
  static async show(req, res) {
    try {
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
      const course = await Course.findByPk(req.params.id, { raw: true });
      if (!course) {
        return res.json({ error: "Không tìm thấy công việc" });
      }
      // res.send({ course, data });

      res.render("course/show", { course, data });
    } catch (err) {
      console.error(err);
      res.json({ error: "Lỗi khi lấy thông tin công việc" });
    }
  }
  // // [GET] /show/:id
  // static show(req, res) {
  //   let course = req.params.id;
  //   res.send("Course detail - " + course);
  // }
}

module.exports = CourseController;
