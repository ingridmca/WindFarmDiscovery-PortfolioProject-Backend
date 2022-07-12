const db = require("../models");

async function turbinesWithPerformance() {
  const turbines = await db.turbine.findByPk(3017499, {
    raw: true,
    include: [db.turbinePerformenceData],
  });

  //If you add the "raw: true" you only have the data itself

  console.log(turbines);
}

turbinesWithPerformance();
