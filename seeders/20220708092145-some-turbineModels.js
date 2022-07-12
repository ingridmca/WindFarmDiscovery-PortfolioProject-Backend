"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "turbineModels",

      [
        {
          model: "GE2.0-116",
          supplier: "GE Wind",
          wsCutIn: 3.0,
          wsCutOut: 25.0,
          turbineImgUrl:
            "https://www.ge.com/renewableenergy/sites/default/files/2020-02/wind-onshore-2.75-120-wind-turbines-emsdetten-germany-3000px.jpg",
          gearbox: "spur/planetary",
          rotorDiameter: 116.0,
          bladeDimension: 56.9,
          description:
            "GE's reliable 2 MW platform of onshore wind turbines has over 20 GW installed and in operation today, featuring a best-in-class capacity factor and a significant improvement in Annual Energy Production (AEP) within the 2 MW wind turbine range. The 2 MW onshore wind turbine demonstrates the next step in wind turbine technology and efficiency, reducing the cost of energy for customers with low and medium wind speed sites.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          model: "GE2.7-116",
          supplier: "GE Wind",
          wsCutIn: 3.0,
          wsCutOut: 25.0,
          turbineImgUrl:
            "https://www.ge.com/renewableenergy/sites/default/files/2020-02/wind-onshore-2.75-120-wind-turbines-emsdetten-germany-3000px.jpg",
          gearbox: "spur/planetary",
          rotorDiameter: 116.0,
          bladeDimension: 56.9,
          description:
            "GE's reliable 2 MW platform of onshore wind turbines has over 20 GW installed and in operation today, featuring a best-in-class capacity factor and a significant improvement in Annual Energy Production (AEP) within the 2 MW wind turbine range. The 2 MW onshore wind turbine demonstrates the next step in wind turbine technology and efficiency, reducing the cost of energy for customers with low and medium wind speed sites.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "V82-1.65",
          supplier: "Vestas",
          wsCutIn: 3.5,
          wsCutOut: 20.0,
          turbineImgUrl:
            "https://images.squarespace-cdn.com/content/v1/525f8ec1e4b03075c47e95fb/1442474073910-SNYPAM06WQOWLP2W6N70/image-asset.jpeg",
          gearbox: "Planetary/helical stages",
          rotorDiameter: 82.0,
          bladeDimension: 40.0,
          description:
            "With its large rotor and powerful generator, the V82 is an excellent performing turbine for sites with low and medium wind conditions. Our hydraulic ActiveStall® technology ensures that the rotor gathers the maximum power from the prevailing wind, while minimising loads and controlling output. ActiveStall® provides failsafe protection in all conditions and, above its rated wind speed, maintains a steady output of 1.65 MW. With the V82, we have designed a wind turbine that offers unparalleled performance at a cost-effective price.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "V150-4.0",
          supplier: "Vestas",
          wsCutIn: 3.0,
          wsCutOut: 22.5,
          turbineImgUrl:
            "https://vestas.scene7.com/is/image/vestas/V150-4.2%20MW%2034?qlt=85&wid=1600&ts=1648449266013&$Default-Image$&dpr=off",
          gearbox: "two planetary stages and one helical stage",
          rotorDiameter: 150.0,
          bladeDimension: 73.7,
          description:
            "With the V150-4.0 MW™ Vestas leads onshore wind power to new heights. With 73.7 meter long blades and the industry’s tallest steel tower, the V150-4.0 MW™ stretches nearly a quarter of a kilometer into the air and is one of the highest producing onshore low wind turbines in the industry. Combined with a leading capacity factor in low wind conditions, the turbine delivers a 21 percent increase in annual energy production compared to the V136-3.45 MW® while achieving a sound power level of only 104.9 dB(A) to serve sound sensitive regions. ",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "G87-2.0",
          supplier: "Gamesa",
          wsCutIn: 3.0,
          wsCutOut: 25.0,
          turbineImgUrl:
            "https://www.evwind.es/wp-content/uploads/2013/11/gamesa-brasil.jpg",
          gearbox: "spur/planetary",
          rotorDiameter: 97.0,
          bladeDimension: 47.5,
          description:
            "The new Gamesa G97-2.0 MW has a swept area 16 percent higher than the existing G90, coupled with an increase in energy output of almost 14 percent. The new wind turbine also features a new aerodynamic blade tip design and the Gamesa NRS® (Noise Reduction System) control system to ensure maximum output with minimum noise",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model: "G58-0.85",
          supplier: "Gamesa",
          wsCutIn: 3.0,
          wsCutOut: 20.0,
          turbineImgUrl:
            "https://en.wind-turbine-models.com/getfoto-NlgetO9KcGV-turbine-gamesa_g58.jpg",
          gearbox: "spur/planetary",
          rotorDiameter: 58.0,
          bladeDimension: 28.3,
          description:
            "The Gamesa G58 850kW Wind Turbine is one of the main wind turbine manufacturers worldwide and leader in Spain in the sector of the manufacture, sale and installation of wind turbines. In 2008, it was ranked third worldwide in wind turbines supplied, with more than 16,000 MW installed and with an accumulated market share of 14% (BTM Consult ApS).Optimum performance for medium and high winds.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("turbineModels", null, {});
  },
};

// name varchar
//   windfarm int
//   dataTime timestamp
//   avgPower float8
//   avgWind float8
//   avgAvaiability float8
//   avgPerformance float8

//npx sequelize-cli model:generate --name windTurbine --attributes name:string,email:string,phone:integer,password:string
