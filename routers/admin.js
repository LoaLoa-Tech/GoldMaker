var express = require("express");
var router = express.Router();
module.exports = router.get("/admin", (req, res) => {
  if (req.session.isAuthed == true) {
    var data = require("../data");
    res.render("admin", { data });
  } else {
    res.redirect("/login"); 
  }
});
