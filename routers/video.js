var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var formidable = require("formidable");
const form = formidable({ uploadDir: "./public/upload", keepExtensions: true });
var xss = require("xss");
router.get("/video", (req, res) => {
  res.render("video", { message: null });
});

router.post("/video", (req, res) => {
  var { password, URL } = req.body;
  var message = "";
  if (URL !== "" && password == "Ducga1609") {
    fs.writeFileSync(path.join(__dirname, "../data/index.js"), "");
    fs.writeFileSync(
      path.join(__dirname, "../data/index.js"),
      `module.exports = {youtube:'${URL}'}`
    );
    message = "Cập nhật thành công";
  } else message = "Sai khẩu khẩu hoặc  thiếu URL.";
  res.render("video", { message });
});
module.exports = router;
