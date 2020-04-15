var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let http = req.protocol + "://";
  let url = http + req.headers.host + "/";
  res.render("index", { appurl: url });
});

module.exports = router;
