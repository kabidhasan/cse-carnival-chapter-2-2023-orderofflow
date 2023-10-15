const db = require("../db");
const { hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { SECRET } = require("../constants");

const axios = require("axios");

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query("SELECT user_id, email FROM users");
    return res.status(201).json(rows);
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const {
      email,
      password,
      education,
      username,
      
    } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await hash(password, 10);

    // Check if the user with the same email already exists
    const userExists = await db.query("SELECT * FROM Users WHERE email = $1", [
      email,
    ]);

    if (userExists.rows.length > 0) {
      return res.status(400).json({
        error: "User with this email already exists",
      });
    }

    // Insert the new user into the Users table
    await db.query(
      "INSERT INTO Users (email, username, password, education, profile_picture_url, phone_number) VALUES ($1, $2, $3, $4, $5, $6)",
      [
        email,
        username,
        hashedPassword,
        education,
        profile_picture_url,
        phone_number,
      ]
    );

    return res.status(201).json({
      success: true,
      msg: "User registration successful",
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};


exports.registerExpert = async (req, res) => {
  try {
    const {
      email,
      password,
      username,
      profile_picture_url,
      country,
      educational_qualification,
      ielts_score,
      gre_score,
      toefl_score,
      crash_course,
      one_time_session,
      document_review,
      available,
      phone_number
    } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await hash(password, 10);

    // Check if the expert with the same email already exists
    const expertExists = await db.query(
      "SELECT * FROM Experts WHERE email = $1",
      [email]
    );

    if (expertExists.rows.length > 0) {
      return res.status(400).json({
        error: "Expert with this email already exists",
      });
    }

    // Insert the new expert into the Experts table
    await db.query(
      "INSERT INTO Experts (email, username, password, profile_picture_url, country, educational_qualification, ielts_score, gre_score, toefl_score, crash_course, one_time_session, document_review, available, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14 )",
      [
        email,
        username,
        hashedPassword,
        profile_picture_url,
        country,
        educational_qualification,
        ielts_score,
        gre_score,
        toefl_score,
        crash_course,
        one_time_session,
        document_review,
        available,
        phone_number
      ]
    );

    return res.status(201).json({
      success: true,
      msg: "Expert registration successful",
    });
  } catch (error) {
    console.error("Error during expert registration:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};


exports.login = async (req, res) => {
  try {
    let user = req.user;

    let payload = {
      id: user.user_id,
      name: user.username,
      email: user.email,
      
    };
    const token = await sign(payload, SECRET);

    res.status(200).cookie("token", token, { httpOnly: true }).json({
      user__id: payload.user_id,
      name: payload.name,
      email: payload.email,
      token: token,
      success: true,
      msg: "Logged in successfully",
    });
  } catch (error) {
    
    console.log(error);

    res.status(401).json({
      
      error: error.message,
    });
  }
};

exports.setPaymentInfo = async (req, res) => {
  try {
    console.log("arrived");
    const { email, acc_no } = req.body;
    console.log(email);
    console.log(acc_no);
    const query = "SELECT email FROM payment_info WHERE email = $1";
    const result = await db.query(query, [email]);

    // if there is already a bank account against the email address, we will update it
    if (result.rows.length) {
      const updateQuery = "Update payment_info set bank_acc = $1 where email = $2 ";
      await db.query(updateQuery, [acc_no, email]);

      return res.status(200).json({
        success: true,
        msg: "payment info updated successfully",
      });
    }
    //if there is no entry of the email in the payment_info table, we will insert it
    else {
      const insertQuery= "INSERT INTO payment_info (email, bank_acc) VALUES ($1, $2)";
      await db.query(insertQuery, [email, acc_no]);

      return res.status(200).json({
        success: true,
        msg: "payment info set successfully",
      });
    }

    
    
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Error while verifying payment info",
      error: error.message,
    });
  }
};


exports.getCurrentUserEmail= async(req, res) => {
  try {
    if (req.user) {
      const userEmail = req.user.email;
      res.status(200).json({ success: true, email: userEmail });
    } else {
      res
        .status(401)
        .json({ success: false, message: "User not authenticated" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};




exports.protected = async (req, res) => {
  try {
    res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
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
