var router = require("express").Router();
const uname = "Admin";			// correct username
const pwd = "Brick12345";		// correct password

router.get("/login", (req, res) => {
	let message="";
	res.render("login",{message});
});

router.post("/login", (req, res) => {
  var { username, password} = req.body;
	console.log(username,username==uname,password,password==pwd);
  var message = "";
  if (username == uname && password == pwd){
	  console.log(`User ${uname} is editting the page..`);
	  req.session.isAuthed = true;
	  res.redirect("/edit");	// sends request to /edit controller
  } else{
	message = "Sai mật khẩu hoặc tên đăng nhập.";
	res.render("login", { message });
  }
});

module.exports = router;
