//const http = require("http");
//const { request } = require("https"); //object destruction ile http.request yerine
const { get } = require("https"); //get ile req.end()'e gerek duymayız

// const req = request("https://www.google.com/", (res) => {
//   res.on("data", (chunk) => {
//     console.log(`Data chunk : ${chunk}`);
//   });
//   res.on("end", () => {
//     console.log("No more data!");
//   });
// });

// req.end();

get("https://www.google.com/", (res) => {
  res.on("data", (chunk) => {
    console.log(`Data chunk : ${chunk}`);
  });
  res.on("end", () => {
    console.log("No more data!");
  });
});
