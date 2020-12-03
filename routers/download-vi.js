var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");
module.exports = router.get("/download-vi", (req, res) => {
  var files = fs.readdirSync(path.join(__dirname, "../public/upload-vi"));
  if (files.length) {
    var file = files[0];
    var destination = path.join(__dirname, "../public/upload-vi", file);
    res.download(destination, function (err) {
      if (!err) return;
      if (err.status !== 404) return next(err);
      res.statusCode = 404;
      res.send("Cant find that file, sorry!");
    });
  } else {
    res.statusCode = 404;
    res.send("Cant find that file, sorry!");
  }
});
