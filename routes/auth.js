const { Router } = require("express");

const { register } = require("../controllers/auth");

const router = Router();

router.route("/register").post(register);

module.exports = router;
