const axios = require("axios");

axios
  .get("https://www.google.com")
  .then((response) => {
    console.log(response.status);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(() => {
    console.log("All done!!");
  });
