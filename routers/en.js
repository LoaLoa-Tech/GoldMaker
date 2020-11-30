var express = require("express");
var router = express.Router();
module.exports = router.get("/en", (req, res) => {
  var data = require("../data");
  res.render("en", { data });
});
