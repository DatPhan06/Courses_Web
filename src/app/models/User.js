const { Sequelize, DataTypes } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Đồng bộ hóa model với cơ sở dữ liệu để tạo bảng
  User.sync({ force: false }) // force: true sẽ xóa bảng cũ (nếu có) và tạo lại
    .then(() => {
      console.log("Bảng đã được tạo hoặc đồng bộ hóa thành công.");
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi khi đồng bộ hóa bảng:", error);
    });
  return User;
};
