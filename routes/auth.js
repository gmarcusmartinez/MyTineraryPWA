const { Router } = require("express");

const { protect } = require("../middleware/auth");
const { register, login, me, passwordReset } = require("../controllers/auth");

const router = Router();
router.post("/login", login);
router.get("/me", protect, me);
router.post("/register", register);
router.post("/passwordReset", passwordReset);

module.exports = router;
