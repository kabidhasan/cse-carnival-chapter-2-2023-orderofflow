import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./ExpertisePage.css";
import axios from "axios";

var a;
const ExpertisePage = () => {
  const { expertId } = useParams();
  const [expertData, setExpertData] = useState(null);

  const navigate = useNavigate();

 const onFrameContainerClick = useCallback(async () => {
   try {
     // Get user_email from localStorage
     const user_email = localStorage.getItem("userEmail");

     // Get expertId from your component's props or state
     const expert_id = expertId;

     // Create a new Date object for the current date and time
     const appointment_date = new Date().toISOString();

     // Set the status to "pending" and item to "One-time session"
     const status = "pending";
     const item = "One-time session";

     // Define the price
     const price = 50.0;

     // Create the appointment data object
     const appointmentData = {
       user_email,
       expert_id,
       appointment_date,
       status,
       item,
       price,
     };

     // Make a POST request to the makeAppointment API
     const response = await axios.post("https://monthly-guided-cow.ngrok-free.app/makeAppointment", appointmentData);

     // Check the response status and handle it accordingly
     if (response.status === 201) {
       // Appointment created successfully
       alert("Appointment created successfully");
       navigate("/appointment-page")
     } else {
       // Handle other response status codes or errors
       console.error("Error creating appointment:", response.data.error);
     }
   } catch (error) {
     console.error("Error creating appointment:", error);
   }
 }, [navigate]);

  const onFrameContainer1Click = useCallback(async () => {
    try {
     // Get user_email from localStorage
     const user_email = localStorage.getItem("userEmail");

     // Get expertId from your component's props or state
     const expert_id = expertId;

     // Create a new Date object for the current date and time
     const appointment_date = new Date().toISOString();

     // Set the status to "pending" and item to "One-time session"
     const status = "pending";
     const item = "Document Review";

     // Define the price
     const price = 50.0;

     // Create the appointment data object
     const appointmentData = {
       user_email,
       expert_id,
       appointment_date,
       status,
       item,
       price,
     };

     // Make a POST request to the makeAppointment API
     const response = await axios.post("https://monthly-guided-cow.ngrok-free.app/makeAppointment", appointmentData);

     // Check the response status and handle it accordingly
     if (response.status === 201) {
       // Appointment created successfully
       alert("Appointment created successfully");
       navigate("/appointment-page")
     } else {
       // Handle other response status codes or errors
       console.error("Error creating appointment:", response.data.error);
     }
   } catch (error) {
     console.error("Error creating appointment:", error);
   }
  }, [navigate]);

  const onFrameContainer2Click = useCallback(async () => {
    try {
      // Get user_email from localStorage
      const user_email = localStorage.getItem("userEmail");

      // Get expertId from your component's props or state
      const expert_id = expertId;

      // Create a new Date object for the current date and time
      const appointment_date = new Date().toISOString();

      // Set the status to "pending" and item to "One-time session"
      const status = "pending";
      const item = "Crash Course";

      // Define the price
      const price = 50.0;

      // Create the appointment data object
      const appointmentData = {
        user_email,
        expert_id,
        appointment_date,
        status,
        item,
        price,
      };

      // Make a POST request to the makeAppointment API
      const response = await axios.post(
        "https://monthly-guided-cow.ngrok-free.app/makeAppointment",
        appointmentData
      );

      // Check the response status and handle it accordingly
      if (response.status === 201) {
        // Appointment created successfully
        alert("Appointment created successfully");
        navigate("/appointment-page");
      } else {
        // Handle other response status codes or errors
        console.error("Error creating appointment:", response.data.error);
      }
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  }, [navigate]);


  

  const onFindExpertiseTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAppointmentsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onProfileTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    // Function to fetch expert data by ID
    const fetchExpertData = async () => {
      try {
        const response = await axios.get(
          `https://monthly-guided-cow.ngrok-free.app/getExpertById?expertId=${expertId}`
        );

        if (response.data) {
          console.log(response.data);
          a = response.data;
          console.log(a.expert.username)
          //localStorage.setItem(a, response.data.username);
          //a= response.data
          setExpertData(response.data); // Set expert data in state
          console.log(expertData);
        }
      } catch (error) {
        console.error("Error fetching expert data:", error);
      }
    };

    // Call the fetchExpertData function when the component mounts
    fetchExpertData();
  }, []);

  useEffect(() => {
    console.log(expertData); // This will log the updated value of expertData
  }, [expertData]);
  return (
    <div className="expertise-page">
      <main className="body4">
        <div className="head1">
          <div className="hear-from-our1">Hear From Our Users</div>
        </div>
        <div className="rev-sec1">
          {/* Render user reviews or feedback here if available */}

          <div className="rev4">
            <div className="request"></div>
            <div className="rating5">4 out of 5</div>
            <div className="she-is-good-container4">
              <p className="she-is-good4">SHe is good</p>
              <p className="she-is-good4">brilliant</p>
            </div>

            
          </div>

          <div className="rev4">
            <div className="request"></div>
            <div className="rating5">5 out of 5</div>

            <div className="she-is-good-container4">
              <p className="she-is-good4">Absolutely amazing</p>
              <p className="she-is-good4">
                just the way I want to learn from an expert
              </p>
            </div>
          </div>
        </div>
        <div className="a1">
          {expertData && (
            <div className="info1">
              <img className="info-item" alt="" src="/ellipse-41@2x.png" />
              <div className="sarah-han1">{expertData.expert.username}</div>
              <div className="albarta-university-chicago-container1">
                <p className="she-is-good4">
                  {expertData.expert.educational_qualification}
                </p>

                <div className="expert-profile">
                  <h2>{expertData.expert.username}'s Profile</h2>
                  <div className="expert-info">
                    <div className="expert-details">
                      <div className="expert-detail">
                        <strong>Country:</strong> {expertData.expert.country}
                      </div>

                      <div className="expert-detail">
                        <strong>Email:</strong> {expertData.expert.email}
                      </div>
                      <div className="expert-detail">
                        <strong>Phone Number:</strong>{" "}
                        {expertData.expert.phone_number || "Not provided"}
                      </div>
                    </div>
                    <div className="expert-scores">
                      <div className="expert-score">
                        <strong>IELTS Score:</strong>{" "}
                        {expertData.expert.ielts_score}
                      </div>
                      <div className="expert-score">
                        <strong>TOEFL Score:</strong>{" "}
                        {expertData.expert.toefl_score}
                      </div>
                      <div className="expert-score">
                        <strong>GRE Score:</strong>{" "}
                        {expertData.expert.gre_score}
                      </div>

                      <div className="expert-score">
                        <strong>Rating:</strong> 4.5 out of 5
                      </div>
                    </div>
                  </div>
                  <div className="expert-description">
                    <h3>About {expertData.expert.username}</h3>
                    <p>Describe the expert here...</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="service1">
            <div className="services1"> Services</div>
            <div className="crash-course3">
              <img
                className="one-time-session-item"
                alt=""
                src="/ellipse-11@2x.png"
              />
              <div className="body-pr3">
                <div className="request">One time Session</div>
                <div className="request">$50.00</div>
              </div>
              <div className="request-wrapper" onClick={onFrameContainerClick}>
                <div className="request">Request</div>
              </div>
            </div>
            <div className="document-rev1">
              <img
                className="one-time-session-item"
                alt=""
                src="/ellipse-1@2x.png"
              />
              <div className="body-pr3">
                <div className="request">Document Review</div>
                <div className="request">$50.00</div>
              </div>
              <div className="request-wrapper" onClick={onFrameContainer1Click}>
                <div className="request">Request</div>
              </div>
            </div>
            <div className="crash-course3">
              <img
                className="one-time-session-item"
                alt=""
                src="/ellipse-11@2x.png"
              />
              <div className="body-pr3">
                <div className="request">
                  <p className="she-is-good4">Crash Course</p>
                  <p className="she-is-good4">on #topic</p>
                </div>
                <div className="request">$50.00</div>
              </div>
              <div className="request-wrapper" onClick={onFrameContainer2Click}>
                <div className="request">Request</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="navbar4">
        <div className="icon5">
          <img className="removal-1-icon5" alt="" src="/removal-1@2x.png" />
          <div className="reachout5">ReachOut!</div>
        </div>
        <div className="links5">
          <div className="find-expertise4">Find Expertise</div>
          <div className="find-expertise4">Appointments</div>
          <div className="find-expertise4">Profile</div>
          <div className="find-expertise4">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;
