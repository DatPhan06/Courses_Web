const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("courses", {
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    course_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    course_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    instructor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    course_videoId: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    course_image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });

  // Đồng bộ hóa model với cơ sở dữ liệu để tạo bảng
  Course.sync({ force: false }) // force: true sẽ xóa bảng cũ (nếu có) và tạo lại
    .then(() => {
      console.log("Bảng đã được tạo hoặc đồng bộ hóa thành công.");
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi khi đồng bộ hóa bảng:", error);
    });

  return Course;
};
