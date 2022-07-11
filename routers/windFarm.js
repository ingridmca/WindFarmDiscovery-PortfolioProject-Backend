const { Router } = require("express");
const WindFarm = require("../models").windFarm;

// create a router that is the sabe as app that we have in index.js

const router = new Router();

//Write how many and any kind of route that you might need!

router.get("/", async (req, res) => {
  try {
    const windFarms = await WindFarm.findAll();
    res.status(200).send(windFarms);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Export your router!

module.exports = router;
