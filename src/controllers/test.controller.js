"use strict";

const testService = require("../services/test.service");

const getTest = async (req, res) => {
  try {
    let gettest = testService.test()
    return res.status(200).json(gettest);
  } catch (error) {
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = {
  getTest,
};
