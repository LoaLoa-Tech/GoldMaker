var fs = require("fs");
var path = require("path");
var express = require("express");
var router = express.Router();
router.get("/admin-en", (req, res) => {
  if (req.session.isAuthed == true) {
    var data = require("../data");
    res.render("admin-en", { data });
  } else {
    res.redirect("/login");
  }
});
router.post("/admin-en", (req, res) => {
  var { e1, e2, e3, e4, e5, e6, e7 } = req.body;
  fs.writeFileSync(path.join(__dirname, "../views/en/1.html"), e1, {
    encoding: "UTF-8",
  });
  fs.writeFileSync(path.join(__dirname, "../views/en/2.html"), e2, {
    encoding: "UTF-8",
  });
  fs.writeFileSync(path.join(__dirname, "../views/en/3.html"), e3, {
    encoding: "UTF-8",
  });
  fs.writeFileSync(path.join(__dirname, "../views/en/4.html"), e4, {
    encoding: "UTF-8",
  });
  fs.writeFileSync(path.join(__dirname, "../views/en/5.html"), e5, {
    encoding: "UTF-8",
  });
  fs.writeFileSync(path.join(__dirname, "../views/en/6.html"), e6, {
    encoding: "UTF-8",
  });
  fs.writeFileSync(path.join(__dirname, "../views/en/7.html"), e7, {
    encoding: "UTF-8",
  });
  res.redirect("/admin-en");
});
module.exports = router;
