var express = require("express");
var router = express.Router();
const dotenv = require("dotenv");
const { appUrl } = require("../config/config");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { appurl: appUrl + "/" });
});

module.exports = router;
