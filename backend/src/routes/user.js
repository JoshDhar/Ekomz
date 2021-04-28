const express = require("express");
const { signup } = require("../controllers/user");
const router = express.Router();

router.get("/signin", (req, res) => {});

router.post("/signup", signup);

module.exports = router;
