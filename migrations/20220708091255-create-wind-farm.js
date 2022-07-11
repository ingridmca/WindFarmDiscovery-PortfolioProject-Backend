"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("windFarms", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      supplier: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      wsCutIn: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      wsCutOut: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      turbineImgUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      gearbox: {
        type: Sequelize.STRING,
      },
      rotorDiameter: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      bladeDimension: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("windFarms");
  },
};
