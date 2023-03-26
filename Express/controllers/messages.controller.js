function getMessages(req, res) {
  //function keyword ü hata alırsak bulmamızda yardımcı olabilmesi için tercih edilir
  res.send("<ul><li>Hello there</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages..");
}

module.exports = {
  getMessages,
  postMessage,
};
