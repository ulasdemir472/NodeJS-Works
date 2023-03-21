const http = require("http");

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
    id: 0,
    name: "Ulas Demir",
  },
  {
    id: 1,
    name: "Umut Demir",
  },
  {
    id: 2,
    name: "Gizem Vurgun",
  },
];

server.on("request", (req, res) => {
  const items = req.url.split("/"); //["","friends","2"] url için

  if (items[1] === "friends") {
    //res.writeHead(200, { "Content-Type": "application/json" });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = +items[2]; //Number yapar
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Selam canim nasilsin?</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
