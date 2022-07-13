const { Router } = require("express");
const TurbinePerformenceData = require("../models").turbinePerformenceData;
const db = require("../models");

// create a router that is the sabe as app that we have in index.js

const router = new Router();

//Write how many and any kind of route that you might need!

router.get("/", async (req, res) => {
  try {
    const turbinePerformance = await db.turbinePerformenceData.findAll({
      include: db.turbine,
    });
    console.log(turbinePerformance);
    res.status(200).send(turbinePerformance);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Export your router!

module.exports = router;
