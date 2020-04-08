const { Router } = require("express");

const { protect } = require("../middleware/auth");
const {
  register,
  login,
  me,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require("../controllers/auth");

const router = Router();

router.post("/login", login);
router.get("/me", protect, me);
router.post("/register", register);

router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);

router.post("/updatedetails", protect, updateDetails);
router.put("/updatepassword/", protect, updatePassword);

module.exports = router;
