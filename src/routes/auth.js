const { Router } = require("express");
const {
  getUsers,
  register,
  login,
  protected,
  logout,

  setPaymentInfo,
  getCurrentUserEmail,
  registerExpert,

} = require("../controllers/auth");
const {
  registrationValidation,
  loginValidation,
  loginValidationForExpert,
} = require("../validators/auth");
const {
  validationMiddleware,
} = require("../middlewares/validation-middleware");
const { userAuth } = require("../middlewares/auth-middleware");
//const { update, getUserID } = require("../controllers/user-details");
const router = Router();

router.get("/all-users", getUsers);
router.post(
  "/register",
  registrationValidation,
  validationMiddleware,
  register
);

router.post(
  "/registerExpert",
  
  registerExpert
);

router.post("/login", loginValidation, validationMiddleware, login);

router.post("/loginExpert", loginValidationForExpert, validationMiddleware, login);

router.post("/setPaymentInfo", setPaymentInfo);

router.get("/protected", userAuth, protected);

router.get("/getCurrentUserEmail",userAuth,  getCurrentUserEmail);

router.get("/logout", userAuth, logout);


module.exports = router;
