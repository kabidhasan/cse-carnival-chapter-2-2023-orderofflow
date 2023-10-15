const db = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");
const axios = require("axios");

exports.login = (req, res) => {
  try {
    const { email, password } = req.body;
    const payLoad = { email: "admin@gmail.com", role: "admin" };
    if (email === "admin@gmail.com" && password === "admin") {
      const token = sign(payLoad, SECRET);
      return res.status(200).cookie("token", token, { httpOnly: true }).json({
        email: payLoad.email,
        success: true,
        msg: "Logged in successfully",
      });
    }
    return res.status(401).json({
      success: false,
      msg: "Invalid credentials",
    });
    //res.send("Admin test route");
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "An error occurred",
      error: error.message,
    });
  }
};

exports.adminProtected = async (req, res) => {
  try {
    return res.status(200).json({
      msg: "You are admin. Your place.",
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      msg: "Logged out successfully",
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

