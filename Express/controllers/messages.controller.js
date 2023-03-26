const path = require("path");

function getMessages(req, res) {
  //function keyword ü hata alırsak bulmamızda yardımcı olabilmesi için tercih edilir
  //res.send("<ul><li>Hello there</li></ul>");
  res.sendFile(
    path.join(__dirname, "..", "public", "images", "skimountain.jpg")
  );
  // dirname bu dosyanın bulunduğu dosyayı yani controllers'ı gösterir.
}

function postMessage(req, res) {
  console.log("Updating messages..");
}

module.exports = {
  getMessages,
  postMessage,
};
