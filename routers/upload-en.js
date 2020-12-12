var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var formidable = require("formidable");
const form = formidable({
  uploadDir: "./public/upload-en",
  keepExtensions: true,
});
var xss = require("xss");
const { throws } = require("assert");
router.get("/upload-en", (req, res) => {
  if (req.session.isAuthed == true) {
    res.render("upload-en", { message: null, data: null });
  } else {
    res.redirect("/login");
  }
});
router.post("/upload-en", (req, res, next) => {
  var message = "";
  /**
   * REMOVE ALL FILE
   */
  try {
    fs.readdirSync(path.join(__dirname, "../public/upload-en")).forEach(
      (file) => {
        var rm = path.join(__dirname, "../public/upload-en", file);
        fs.unlinkSync(rm);
      }
    );
  } catch (e) {
    console.log("cannot remove file");
  }
  /**
   * PARSE
   */
  form.parse(req, (err, fields, files) => {
    if (err) {
      res.render("upload-en", { message: "Upload không thành công." });
      next();
    } else {
      try {
        fs.renameSync(
          files.file.path,
          path.join(__dirname, "../public/upload-en/", files.file.name)
        );
        res.render("upload-en", { message: xss(message) });
      } catch {
        next();
      }
    }
  });
});
module.exports = router;
