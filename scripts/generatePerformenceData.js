const db = require("../models");

// db.turbine.findAll().then((turbines) => {
//   for (const turbine of turbines) {
//     const start = new Date("2022-01-01 00:00:00 UTC");
//     const end = new Date("2022-01-02 00:00:00 UTC");
//     const tenMinuteMs = 10 * 60 * 1000; // ms

//     for (
//       let current = start;
//       current < end;
//       current = new Date(current.getTime() + tenMinuteMs)
//     ) {
//       // add power per turbine by 10 min in 10 min
//     }
//   }
// });
// dataTime timestamp
// avgPower float8
// avgWind float8
// avgAvaiability float8
// avgPerformance float8

const turbineIds = async () => {
  db.turbine.findAll({ raw: true }).then((turbines) => {
    for (const turbine of turbines) {
      const start = new Date("2022-01-01 00:00:00 UTC");
      const end = new Date("2022-04-01 00:00:00 UTC");
      const tenMinuteMs = 10 * 60 * 1000; // ms

      for (
        let current = start;
        current < end;
        current = new Date(current.getTime() + tenMinuteMs)
      ) {
        const case_id = turbine.case_id;
        const timestamp = current;
        const avgWind = Math.floor(Math.random() * 1800) / 100;

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

        const avgAvaiability = Math.floor((Math.random() * 3 + 97) * 100) / 100;
        const avgPowerCurve = Math.floor((Math.random() * 4 + 96) * 100) / 100;
        console.log(
          turbine,
          current,
          avgWind,
          avgPower,
          avgAvaiability,
          avgPowerCurve
        );
      }
    }
  });
};

turbineIds();

//npx sequelize-cli model:generate --name turbinePerformenceData --attributes case_id:integer,timestamp:date,avgPower:double,avgWind:double,avgAvaiability:double,avgPerformance:double
