const db = require("../db");
const axios = require("axios");

exports.getAllExperts = async (req, res) => {
  try {
    // Query the database to retrieve all experts
    const experts = await db.query("SELECT * FROM Experts");

    // Send the list of experts as a JSON response
    res.status(200).json({
      experts: experts.rows,
    });
  } catch (error) {
    console.error("Error while fetching experts:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};


exports.getExpertById = async (req, res) => {
  try {
    const { expertId } = req.query;
    console.log(expertId);
    // Query the database to retrieve the expert by ID
    const expert = await db.query(
      "SELECT * FROM Experts WHERE expert_id = $1",
      [expertId]
    );

    if (expert.rows.length === 0) {
      return res.status(404).json({
        error: "Expert not found",
      });
    }

    // Send the expert information as a JSON response
    res.status(200).json({
      expert: expert.rows[0],
    });
  } catch (error) {
    console.error("Error while fetching expert by ID:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

exports.getAllExpertsByCountry = async (req, res) => {
  try {
    const { country } = req.query;

    // Query the database to retrieve experts by the specified country
    const experts = await db.query("SELECT * FROM Experts WHERE country = $1", [
      country,
    ]);

    // Send the list of experts as a JSON response
    res.status(200).json({
      experts: experts.rows,
    });
  } catch (error) {
    console.error("Error while fetching experts by country:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

exports.getAllExpertsByServices = async (req, res) => {
  try {
    const { crashCourse, oneTimeSession, documentReview } = req.query;

    // Construct a dynamic SQL query based on selected services
    const queryParams = [];
    let query = "SELECT * FROM Experts WHERE ";

    if (crashCourse === "true") {
      query += "crash_course = true ";
      queryParams.push(true);
    }

    if (oneTimeSession === "true") {
      if (queryParams.length > 0) {
        query += "AND ";
      }
      query += "one_time_session = true ";
      queryParams.push(true);
    }

    if (documentReview === "true") {
      if (queryParams.length > 0) {
        query += "AND ";
      }
      query += "document_review = true ";
      queryParams.push(true);
    }

    console.log(query);
    // Execute the database query with dynamic conditions
    const experts = await db.query(query);

    // Send the list of experts as a JSON response
    res.status(200).json({
      experts: experts.rows,
    });
  } catch (error) {
    console.error("Error while fetching experts by service:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};


exports.updatePrice = async (req, res) => {
  try {
    const expertId = req.body.expertId;
    const { crashCoursePrice, oneTimeSessionPrice, documentReviewPrice } = req.body;

    // Check if a pricing record already exists for the expert
    const checkQuery = 'SELECT * FROM Pricing WHERE expert_id = $1';
    const checkResult = await db.query(checkQuery, [expertId]);

    if (checkResult.rows.length === 0) {
      // If no record exists, insert a new pricing record
      const insertQuery = `
        INSERT INTO Pricing (expert_id, crash_course_price, one_time_session_price, document_review_price)
        VALUES ($1, $2, $3, $4)
      `;

      await db.query(insertQuery, [expertId, crashCoursePrice, oneTimeSessionPrice, documentReviewPrice]);
    } else {
      // If a record exists, update the existing pricing record
      const updateQuery = `
        UPDATE Pricing
        SET
          crash_course_price = $1,
          one_time_session_price = $2,
          document_review_price = $3
        WHERE expert_id = $4
      `;

      await db.query(updateQuery, [crashCoursePrice, oneTimeSessionPrice, documentReviewPrice, expertId]);
    }

    res.status(200).json({ message: 'Pricing updated successfully' });
  } catch (error) {
    console.error('Error while updating pricing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.makeAppointment = async (req, res) => {
  try {
    const { user_email, expert_id, appointment_date, status, item } = req.body;

    // Make a GET request to the getUserIdByEmail API to retrieve the user_id
    const getUserIdResponse = await axios.get(
      `http://localhost:6000/getUserIdByEmail?email=${user_email}`
    );
    const price = 50.00;
    // Extract the user_id from the response
    const { user_id } = getUserIdResponse.data;

    // Calculate the fee as 10% of the price (You'll need to provide the 'price' variable)
    const fee = price * 0.1;

    // Insert the new appointment into the Appointments table
    const newAppointment = await db.query(
      `
      INSERT INTO Appointments (user_id, expert_id, appointment_date, status, fee, price, item)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `,
      [user_id, expert_id, appointment_date, status, fee, price, item]
    );

    res.status(201).json({
      success: true,
      message: "Appointment created successfully",
    });
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({
      success: false,
      error: "Unable to create appointment",
    });
  }
};



exports.confirmAppointmentByAppointmentId = async (req, res) => {
  try {
    const { appointmentId } = req.body;

    // Fetch the appointment details including user_id, expert_id, and price
    const appointment = await db.query(
      "SELECT user_id, expert_id, price FROM Appointments WHERE appointment_id = $1",
      [appointmentId]
    );
    
    console.log(appointment)
    const { user_id, expert_id, price } = appointment.rows[0];
    console.log(price);
    // Deduct 100% of the price from the user's balance
    console.log(price);
    await db.query(
      "UPDATE Users SET balance = balance - $1 WHERE user_id = $2",
      [price, user_id]
    );

    // Calculate 90% of the price as the amount to give to the expert
    const expertAmount = price * 0.9;

    // Add 90% of the price to the expert's balance
    await db.query(
      "UPDATE Experts SET balance = balance + $1 WHERE expert_id = $2",
      [expertAmount, expert_id]
    );

    // Update the appointment status to 'confirmed'
    await db.query(
      "UPDATE Appointments SET status = $1 WHERE appointment_id = $2",
      ["confirmed", appointmentId]
    );

    res.status(200).json({
      success: true,
      message: "Appointment confirmed successfully",
    });
  } catch (error) {
    console.error("Error confirming appointment:", error);
    res.status(500).json({
      success: false,
      error: "Unable to confirm appointment",
    });
  }
};


exports.getUserIdByEmail = async (req, res) => {
  try {
    const { email } = req.query;

    // Query the database to get the user ID by email
    const query = "SELECT user_id FROM users WHERE email = $1";
    const result = await db.query(query, [email]);

    // Check if a user was found
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const userId = result.rows[0].user_id;
    return res.json({ user_id: userId });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


exports.getAllAppointments = async (req, res) => {
  try {
    const { user_email} = req.query;

    // Make a GET request to the getUserIdByEmail API to retrieve the user_id
    const getUserIdResponse = await axios.get(
      `http://localhost:6000/getUserIdByEmail?email=${user_email}`
    );
      console.log(getUserIdResponse);
    // Check if the user_id was successfully retrieved from the response
    if (!getUserIdResponse.data.user_id) {
      return res.status(404).json({
        error: 'User not found',
      });
    }

    const user_id = getUserIdResponse.data.user_id;

    // Construct a SQL query to retrieve appointments based on filters
    const query = `
      SELECT * FROM Appointments
      WHERE user_id = $1
    `;

    // Execute the SQL query with the provided parameters
    const appointments = await db.query(query, [
      user_id
    ]);

    res.status(200).json({
      appointments: appointments.rows,
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
};

exports.getExpertById = async (req,res) => {
  try {
    const { expertId } = req.query;

    // Query the database to retrieve the expert by ID
    const expert = await db.query(
      "SELECT * FROM Experts WHERE expert_id = $1",
      [expertId]
    );

    if (expert.rows.length === 0) {
      return res.status(404).json({
        error: "Expert not found",
      });
    }

    // Send the expert information as a JSON response
    res.status(200).json({
      expert: expert.rows[0],
    });
  } catch (error) {
    console.error("Error while fetching expert by ID:", error);
    res.status(500).json({
      error: "Internal server error",
    });
  }

}