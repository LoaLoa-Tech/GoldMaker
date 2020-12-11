var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var formidable = require("formidable");
const form = formidable({ uploadDir: "./public/upload", keepExtensions: true });
var xss = require("xss");
router.get("/video", (req, res) => {
  var data = require("../data");
  res.render("video", { message: null, data });
});

router.post("/video", (req, res) => {
  var data = require("../data");
  var { description, URL } = req.body;
  var message = "";
  fs.writeFileSync(path.join(__dirname, "../data/index.js"), "");
  fs.writeFileSync(
    path.join(__dirname, "../data/index.js"),
    `module.exports = {youtube:'${URL}', description: '${description}'}`
  );
  message = "Cập nhật thành công";
  res.render("video", { message, data });
});
module.exports = router;
