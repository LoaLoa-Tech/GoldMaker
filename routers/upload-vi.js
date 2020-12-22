var express = require("express");
var path = require("path");
var fs = require("fs");
var router = express.Router();
var formidable = require("formidable");
const form = formidable({
	uploadDir: "./public/upload-vi",
	keepExtensions: true,
});
var xss = require("xss");
const { throws } = require("assert");
router.get("/upload-vi", (req, res) => {
	if (req.session.isAuthed == true) {
		res.render("upload-vi", { message: null, data: null });
	} else {
		res.redirect("/login");
	}
});
router.post("/upload-vi", (req, res, next) => {
	var message = "";
	/**
	 * REMOVE ALL FILE
	 */
	try {
		fs.readdirSync(path.join(__dirname, "../public/upload-vi")).forEach(
			(file) => {
				var rm = path.join(__dirname, "../public/upload-vi", file);
				fs.unlinkSync(rm);
			}
		);
	} catch (e) {
		console.log("cannot remove file");
		message = "cannot remove file";
	}
	/**
	 * PARSE
	 */
	form.parse(req, (err, fields, files) => {
		if (err) {
			message = "upload fail";
		} else {
			try {
				fs.renameSync(
					files.file.path,
					path.join(__dirname, "../public/upload-vi/", files.file.name)
				);
				message = "success";
			} catch {
				message = "done";
			}
		}
	});
	res.render("upload-vi", { message: xss(message),data:null });
});
module.exports = router;
