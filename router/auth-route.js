const express = require("express");
const router = express.Router();
const authcontorllers = require("../controller/auth-controller");

router.route("/").get(authcontorllers.home);
router.route("/register").post(authcontorllers.register);

module.exports = router;
