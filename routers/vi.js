var express = require("express");
var router = express.Router();
module.exports = router.get("/vi", (req, res) => {
  var data = require("../data");
  res.render("vi", { data });
});
