"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("turbinePerformenceData", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      case_id: {
        type: Sequelize.INTEGER,
      },
      timestamp: {
        type: Sequelize.DATE,
      },
      avgPower: {
        type: Sequelize.DOUBLE,
      },
      avgWind: {
        type: Sequelize.DOUBLE,
      },
      avgAvaiability: {
        type: Sequelize.DOUBLE,
      },
      avgPerformance: {
        type: Sequelize.DOUBLE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("turbinePerformenceData");
  },
};
