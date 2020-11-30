var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var formidable = require("formidable");
const form = formidable({ uploadDir: "./public/upload", keepExtensions: true });
var xss = require("xss");
const { throws } = require("assert");
router.get("/upload", (req, res) => {
  res.render("upload", { message: null });
});
router.get("/admin", (req, res) => {
  res.redirect("/upload");
});
router.post("/upload", (req, res, next) => {
  var message = "";
  fs.readdirSync(path.join(__dirname, "../public/upload")).forEach((file) => {
    var rm = path.join(__dirname, "../public/upload", file);
    console.log("REMOVE " + rm);
    fs.unlinkSync(rm);
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.render("upload", { message: "Upload không thành công." });
      next();
    } else {
      var { password, url } = fields;
      var isAdmin = true;

      if (password) {
        if (password === "Ducga1609") {
          message = "Upload thành công";
        } else {
          message = "Sai mật khẩu";
          isAdmin = false;
        }
      } else {
        message = "Vui lòng nhập mật khẩu";
        isAdmin = false;
      }
      if (!isAdmin) {
        try {
          fs.unlinkSync(path.join(__dirname, "../", files.file.path));
        } catch {}
      }
      try {
        res.render("upload", { message: xss(message) });
      } catch {
        next();
      }
    }
  });
});
module.exports = router;
