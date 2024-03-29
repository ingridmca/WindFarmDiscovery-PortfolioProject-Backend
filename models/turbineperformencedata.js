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
      turbinePerformenceData.belongsTo(models.turbine, {
        foreignKey: "case_id",
      });
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
      p_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "turbinePerformenceData",
      timestamps: false,
    }
  );
  return turbinePerformenceData;
};
