"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class turbine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      turbine.hasMany(models.turbinePerformenceData, { foreignKey: "case_id" });
    }
  }
  turbine.init(
    {
      p_name: DataTypes.STRING,
      case_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
      },
      t_cap: DataTypes.INTEGER,
      t_model: DataTypes.STRING,
      p_tnum: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "turbine",
      timestamps: false,
    }
  );
  return turbine;
};
