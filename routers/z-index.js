var express = require("express");
var router = express.Router();
module.exports = router.get("/", (req, res) => {
  var data = require("../data");
  res.render("index", { data });
});
