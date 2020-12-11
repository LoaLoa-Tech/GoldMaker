var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var fs = require("fs");
var app = express();
var session = require("express-session");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({ secret: "loaloatech" }));

var files = fs.readdirSync(path.join(__dirname, "routers"));
files.forEach((file) => {
  var router = require(`./routers/${file}`);
  app.use(router);
});
var port = 3001;
app.listen(port, () => {
  console.log(`listening at ${port}`);
});
module.exports = app;
