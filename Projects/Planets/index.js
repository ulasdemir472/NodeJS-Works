const { parse } = require("csv-parse");
const fs = require("fs");

const results = [];

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#", //diyez ile başlayan satırlar
      columns: true, //rowları döndürür nesne olarak
    })
  ) //kepler data source parse ise destination for pipe
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(results);
    console.log("Done!");
  });
