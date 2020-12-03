var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
router.get('/admin-vi', (req, res) => {
  var data = require('../data');
  res.render('admin-vi', { data });
});
router.post('/admin-vi', (req, res) => {
  var { e1, e2, e3, e4, e5, e6, e7 } = req.body;

  var folderPath = path.join(__dirname, '../views/vi/1.html');
  fs.writeFileSync(folderPath, e1, { encoding: 'UTF-8' });

  console.log(e1);
  res.redirect('/admin-vi');
});
module.exports = router;
