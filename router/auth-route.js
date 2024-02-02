const express = require("express");
const router = express.Router();
const authcontorllers = require("../controller/auth-controller");

router.route("/").get(authcontorllers.home);
router.route("/register").get(authcontorllers.register);

module.exports = router;
