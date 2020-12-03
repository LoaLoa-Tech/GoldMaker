var express = require("express");
var router = express.Router();
module.exports = router.get("/admin-vi", (req, res) => {
  var data = require("../data");
  res.render("admin-vi", { data });
});
