"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("turbines", {
      p_name: {
        type: Sequelize.STRING,
      },
      case_id: {
        allowNull: false,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER,
      },
      t_cap: {
        type: Sequelize.INTEGER,
      },
      t_model: {
        type: Sequelize.STRING,
      },
      p_tnum: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("turbines");
  },
};
