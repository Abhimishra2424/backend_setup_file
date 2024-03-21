const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Test = sequelize.define(
    "test",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(225),
        allowNull: false,
      },
    },
    {
      tableName: "test",
      timestamps: true,
      createdAt: "cdate",
      updatedAt: "udate",
    }
  );

  return Test;
};