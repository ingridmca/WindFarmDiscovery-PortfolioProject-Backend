"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class windFarm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  windFarm.init(
    {
      model: { type: DataTypes.STRING, allowNull: false },
      supplier: { type: DataTypes.STRING, allowNull: false },
      wsCutIn: { type: DataTypes.DOUBLE, allowNull: false },
      wsCutOut: { type: DataTypes.DOUBLE, allowNull: false },
      turbineImgUrl: { type: DataTypes.STRING, allowNull: false },
      gearbox: { type: DataTypes.STRING },
      rotorDiameter: { type: DataTypes.DOUBLE, allowNull: false },
      bladeDimension: { type: DataTypes.DOUBLE, allowNull: false },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "windFarm",
    }
  );
  return windFarm;
};
