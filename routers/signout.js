var router = require("express").Router();
const uname = "Admin"; // correct username
const pwd = "Brick12345"; // correct password

router.get("/signout", (req, res) => {
  req.session.isAuthed = false;
  res.redirect("/login");
});

module.exports = router;
