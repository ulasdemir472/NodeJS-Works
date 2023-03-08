const EventEmitter = require("events");

const celebrity = new EventEmitter(); //ünlümüz hayatıyla ilgili olay yayar

// Subscribe the celebrity for Observer 1
celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congrats!");
  }
});

// Subscribe the celebrity for Observer 2
celebrity.on("race", (result) => {
  if (result === "lost") {
    console.log("Boo!");
  }
});

process.on("exit", (code) => {
  console.log(`Process exit event with code : ${code} `);
});

celebrity.emit("race", "win");
celebrity.emit("race", "lost");
