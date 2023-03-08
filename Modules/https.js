const internals = require("./internals"); // internals modül değil ama index.js ile sağlanabilir
// import { send } from "./request.mjs";
//const { read } = require("./internals/response.js");
// import { read } from "./response.mjs";
//const { send } = require("./internals/request.js");

const makeRequest = (url, data) => {
  internals.request.send(url, data);
  return internals.response.read();
};

const responseData = makeRequest("https://www.google.com", "Hi");
console.log(responseData);

// console.log(require.cache);
