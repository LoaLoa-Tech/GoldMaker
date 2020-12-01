var fs = require("fs");
var path =require("path");
var router = require("express").Router();
const uname = "Admin";			// correct username
const pwd = "Brick12345";		// correct password

router.get("/edit", (req, res) => {
	let message="Click on an editable area to start editing.";
	let type="info"; 
	 let data = require("../data");
	if(req.session.isAuthed==true)
	res.render("edit",{data,message,type});
	else
		res.redirect("/login");
});

router.post("/edit", (req, res) => {
	if(req.session.isAuthed==true){// checks if logged in
		let {part, content} = req.body;	// gets part and content from request
		 let data = require("../data");
		let fileName = part+".html"; 
		// DEBUGGING
		let filePath = path.join(__dirname,"../views",fileName);
		console.log(filePath,content);
		fs.writeFile(path.join(__dirname,"../views",fileName),content,(err)=>{	// writes content to proper file part
			let message = err;
			let type="danger"; 	// sets type of result (bootstrap class)
			if(message==null){	// checks if no error
				message="Content updated!"
				type="success";
			}
			res.render("edit",{data,message,type});	// sends message and render the edit page
			// DEBUGGING
			console.log({message,type});

  });
	}else{
		res.redirect("/login"); 	// sends request to login controller
  }
});

module.exports = router;
