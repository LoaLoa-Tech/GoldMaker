var express = require("express");
var router = express.Router();
var fs = require("fs");
router.get("/get-content-vi", (req, res) => {
  fs.readFileSync("../views/vi/1.html", { encoding: "utf-8" });
  res.send({});
});
router.get("/set-content-vi", (req, res) => {
  res.send({});
});
module.exports = router;
