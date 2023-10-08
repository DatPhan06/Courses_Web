const { Sequelize, DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
      title: {
          type : DataTypes.STRING,
          allowNull : false,
      },
      description: {
          type: DataTypes.TEXT,
          allowNull: true,
      },
  });

  return Course;
}
