const db = require("../models");

const turbineIds = async () => {
  const turbines = await db.turbine.findAll({
    where: {
      p_name: ["Groton", "Winchester", "Bear Creek"],
    },
    raw: true,
  });
  // console.log(turbines);
  //insert wherep_name filter for wind farms Groton, Winchester,Prospector

  for (const turbine of turbines) {
    //    break;
    const start = new Date("2022-01-03 01:00:00");
    const end = new Date("2022-04-01 00:00:00");
    const oneHourMs = 10 * 60 * 1000 * 6; // ms

    let batchTurbines = [];

    for (
      let current = start;
      current < end;
      current = new Date(current.getTime() + oneHourMs)
    ) {
      const case_id = turbine.case_id;
      const p_name = turbine.p_name;
      const timestamp = current;
      let avgWind;
      let avgAvaiability;
      if (
        current <
        new Date(
          "2022-01-15 01:00:00" &&
            (p_name === "Groton" || p_name === "Winchester")
        )
      ) {
        avgWind = Math.floor(Math.random() * 1500) / 100;
        avgAvaiability = Math.floor((Math.random() * 5 + 95) * 100) / 100;
      } else if (
        current >= new Date("2022-01-16 01:00:00") &&
        current <
          new Date(
            "2022-02-10 01:00:00" &&
              (p_name === "Bear Creek" || p_name === "Winchester")
          )
      ) {
        avgWind = Math.floor(Math.random() * 500) / 100;
        avgAvaiability = Math.floor((Math.random() * 10 + 90) * 100) / 100;
      } else if (
        current >= new Date("2022-02-20 01:00:00") &&
        current <
          new Date(
            "2022-03-10 01:00:00" &&
              (p_name === "Groton" || p_name === "Winchester")
          )
      ) {
        avgWind = Math.floor(Math.random() * 800) / 100;
        avgAvaiability = Math.floor((Math.random() * 3 + 97) * 100) / 100;
      } else if (
        current >= new Date("2022-03-10 01:00:00") &&
        (p_name === "Groton" || p_name === "Bear Creek")
      ) {
        avgWind = Math.floor(Math.random() * 1100) / 100;
        avgAvaiability = Math.floor((Math.random() * 4 + 96) * 100) / 100;
      } else {
        avgWind = Math.floor(Math.random() * 900) / 100;
        avgAvaiability = Math.floor((Math.random() * 5 + 95) * 100) / 100;
      }

      let avgPower;

      if (avgWind >= 0 && avgWind < 3.5) {
        avgPower = 0;
      } else if (avgWind >= 3.5 && avgWind < 4.0) {
        avgPower = (turbine.t_cap * 1.88) / 100;
      } else if (avgWind >= 4.0 && avgWind < 4.5) {
        avgPower = (turbine.t_cap * 4.24) / 100;
      } else if (avgWind >= 4.5 && avgWind < 5.0) {
        avgPower = (turbine.t_cap * 7.41) / 100;
      } else if (avgWind >= 5.0 && avgWind < 5.5) {
        avgPower = (turbine.t_cap * 10.94) / 100;
      } else if (avgWind >= 5.5 && avgWind < 6.0) {
        avgPower = (turbine.t_cap * 15.05) / 100;
      } else if (avgWind >= 6.0 && avgWind < 6.5) {
        avgPower = (turbine.t_cap * 19.64) / 100;
      } else if (avgWind >= 6.5 && avgWind < 7.0) {
        avgPower = (turbine.t_cap * 24.82) / 100;
      } else if (avgWind >= 7.0 && avgWind < 7.5) {
        avgPower = (turbine.t_cap * 30.82) / 100;
      } else if (avgWind >= 7.5 && avgWind < 8.0) {
        avgPower = (turbine.t_cap * 37.17) / 100;
      } else if (avgWind >= 8.0 && avgWind < 8.5) {
        avgPower = (turbine.t_cap * 43.64) / 100;
      } else if (avgWind >= 8.5 && avgWind < 9.0) {
        avgPower = (turbine.t_cap * 50.12) / 100;
      } else if (avgWind >= 9.0 && avgWind < 9.5) {
        avgPower = (turbine.t_cap * 56.64) / 100;
      } else if (avgWind >= 9.5 && avgWind < 10.0) {
        avgPower = (turbine.t_cap * 63.17) / 100;
      } else if (avgWind >= 10.0 && avgWind < 10.5) {
        avgPower = (turbine.t_cap * 69.76) / 100;
      } else if (avgWind >= 10.5 && avgWind < 11.0) {
        avgPower = (turbine.t_cap * 76.23) / 100;
      } else if (avgWind >= 11.0 && avgWind < 11.5) {
        avgPower = (turbine.t_cap * 82.82) / 100;
      } else if (avgWind >= 11.5 && avgWind < 12.0) {
        avgPower = (turbine.t_cap * 92.89) / 100;
      } else if (avgWind >= 12) {
        avgPower = turbine.t_cap;
      }

      const avgPerformance = Math.floor((Math.random() * 4 + 96) * 100) / 100;

      if (batchTurbines.length < 300) {
        batchTurbines.push({
          case_id,
          timestamp,
          avgPower,
          avgWind,
          avgAvaiability,
          avgPerformance,
          p_name,
        });
      } else {
        await db.turbinePerformenceData.bulkCreate(batchTurbines);
        batchTurbines = [];
      }
    }

    if (batchTurbines.length > 0) {
      await db.turbinePerformenceData.bulkCreate(batchTurbines);
    }
  }
};

turbineIds().catch((error) => console.error(error.message));
