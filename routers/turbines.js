const { Router } = require("express");
const db = require("../models");

// create a router that is the sabe as app that we have in index.js

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const pName = req.params["p_name"];

    let where = {};

    if (pName) {
      where.p_name = pName;
    }

    res.status(200).send(await db.turbine.findAll({ where, raw: true }));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/farms", async (req, res) => {
  try {
    const farms = await db.sequelize.query(
      `
    SELECT p_name, MAX(p_year) as p_year, t_manu, t_model, t_hh, t_cap, p_tnum, AVG(xlong) as xlong, AVG(ylat) as ylat 
    FROM turbines 
    GROUP BY p_name, t_model, t_hh, t_cap, t_manu, p_tnum;
    `,
      { type: db.Sequelize.QueryTypes.SELECT }
    );

    res.status(200).send(farms);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/performance", async (req, res) => {
  try {
    const pNameParam = req.params["p_name"] || "";
    const pNames = pNameParam.split(",");

    let where = {};

    if (pNames.lenght > 0) {
      where.p_name = pNames;
    }

    const turbinePerformance = await db.turbinePerformenceData.findAll({
      where,
      include: db.turbine,
    });

    res.status(200).send(turbinePerformance);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Export your router!

module.exports = router;
