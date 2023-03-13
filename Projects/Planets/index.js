const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 && //ışık sayısı
    planet["koi_prad"] < 1.6 //büyüklük dünyanın 1.6 katı olmalı en fazla
  );
}

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#", //diyez ile başlayan satırlar
      columns: true, //rowları döndürür nesne olarak
    })
  ) //kepler data source, parse ise destination for pipe
  .on("data", (data) => {
    if (isHabitablePlanet(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    //console.log(`${habitablePlanets.length} habitable planets found!`);
    habitablePlanets.map((planet) => {
      console.log(`Name : ${planet.kepler_name}`);
    });
  });
