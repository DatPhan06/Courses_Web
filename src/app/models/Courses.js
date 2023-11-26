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

  return Course;
};
