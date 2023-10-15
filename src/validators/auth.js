const { check } = require("express-validator");
const db = require("../db");
const { compare } = require("bcryptjs");

const password = check("password")
  .isLength(6, 15)
  .withMessage("Password must be between 6 to 15 characters.");
const email = check("email")
  .isEmail()
  .withMessage("Please enter a valid email.");
const emailExists = check("email").custom(async (value) => {
  const { rows } = await db.query("select * from users where email= $1", [
    value,
  ]);
  if (rows.length) {
    throw new Error("Email already exists.");
  }
});
const name = check("username").notEmpty().withMessage("Name is required.");

const address = check("address").notEmpty().withMessage("Address is required.");

const loginFieldsCheck = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * FROM users WHERE email = $1", [
    value,
  ]);
  if (!user.rows.length) {
    throw new Error("Email does not exist.");
  }

  const validPassword = await compare(req.body.password, user.rows[0].password);

  if (!validPassword) {
    throw new Error("Password is invalid");
  }

  req.user = user.rows[0];
});

const loginFieldsCheckForExpert = check("email").custom(async (value, { req }) => {
  const user = await db.query("SELECT * FROM experts WHERE email = $1", [value]);
  if (!user.rows.length) {
    throw new Error("Email does not exist.");
  }

  const validPassword = await compare(req.body.password, user.rows[0].password);

  if (user.rows[0].status == "pending") {
    throw new Error("Wait to get accepted by admin")
  }
  if (!validPassword) {
    throw new Error("Password is invalid");
  }

  req.user = user.rows[0];
});
module.exports = {
  registrationValidation: [email, name, password, emailExists],
  loginValidation: [loginFieldsCheck],
  loginValidationForExpert: [loginFieldsCheckForExpert]
};
