"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class turbinePerformenceData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  turbinePerformenceData.init(
    {
      case_id: DataTypes.INTEGER,
      timestamp: DataTypes.DATE,
      avgPower: DataTypes.DOUBLE,
      avgWind: DataTypes.DOUBLE,
      avgAvaiability: DataTypes.DOUBLE,
      avgPerformance: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "turbinePerformenceData",
      timestamps: false,
    }
  );
  return turbinePerformenceData;
};
