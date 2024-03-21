"use strict";
const db = require('../db')

const test = () => {
    try {
        return { ok: "ok" }
    } catch (error) {
        return res.status(500).json({ error: "An error occurred" });
    }
};

module.exports = {
    test,
};
