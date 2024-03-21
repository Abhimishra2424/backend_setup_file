"use strict";
var express = require("express");
var router = express.Router();
const testController = require("../controllers/test.controller");

router.get("/test", testController.getTest);

module.exports = router;