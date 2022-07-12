const { Router } = require("express");
const TurbineModel = require("../models").turbineModel;

// create a router that is the sabe as app that we have in index.js

const router = new Router();

//Write how many and any kind of route that you might need!

router.get("/", async (req, res) => {
  try {
    const turbineModel = await TurbineModel.findAll();
    res.status(200).send(turbineModel);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Export your router!

module.exports = router;
