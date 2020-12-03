var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var formidable = require("formidable");
const form = formidable({
  uploadDir: "./public/upload-vi",
  keepExtensions: true,
});
var xss = require("xss");
const { throws } = require("assert");
router.get("/upload-vi", (req, res) => {
  res.render("upload-vi", { message: null });
});
router.post("/upload-vi", (req, res, next) => {
  var message = "";
  /**
   * REMOVE ALL FILE
   */
  fs.readdirSync(path.join(__dirname, "../public/upload-vi")).forEach(
    (file) => {
      var rm = path.join(__dirname, "../public/upload-vi", file);
      fs.unlinkSync(rm);
    }
  );
  /**
   * PARSE
   */
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.render("upload-vi", { message: "Upload không thành công." });
      next();
    } else {
      try {
        fs.renameSync(
          files.file.path,
          path.join(__dirname, "../public/upload-vi/", xss(files.file.name))
        );
        res.render("upload-vi", { message: xss(message) });
      } catch {
        next();
      }
    }
  });
});
module.exports = router;
