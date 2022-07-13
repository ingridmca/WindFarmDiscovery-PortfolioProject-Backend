"use strict";
const axios = require("axios");

const fetchTurbines = async (dispatch, getState) => {
  const API_URL = `https://eersc.usgs.gov/api/uswtdb/v1`;
  try {
    const columnKeys = "p_name, case_id, t_cap, t_model,p_tnum";

    // const selectedWindFarms =
    //   "&or=(p_name.eq.Blue Sky - Green Field,p_name.eq.Bear Creek, p_name.eq.Anderson Wind Project, p_name.eq.Farmers City,p_name.eq.Lempster,p_name.eq.Willow Spring,p_name.eq.Zachary Ridge,p_name.eq.Winchester,p_name.eq.Windstar,p_name.eq.Franklin County)";

    const selectedWindFarms =
      "&or=(p_name.eq.Groton,p_name.eq.Winchester,p_name.eq.Prospector)";

    const filterKeys = `&or=(t_manu.eq.Vestas, t_manu.eq.Gamesa, t_manu.eq.GE Wind)&t_model=neq.null${selectedWindFarms}`;

    const responseFarms = await axios.get(
      `${API_URL}/turbines?${filterKeys}&select=${columnKeys}`
    );
    return responseFarms.data;
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("turbines", await fetchTurbines(), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("turbines", null, {});
  },
};
