import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AppointmentPage.css";
import axios from "axios";

const AppointmentPage = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const user_email = localStorage.getItem("userEmail"); // Retrieve user_email from localStorage

  useEffect(() => {
    // Function to fetch appointments based on user_email
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          `https://monthly-guided-cow.ngrok-free.app/getAllAppointments?user_email=${user_email}`
        );

        if (response.data && response.data.appointments) {
          setAppointments(response.data.appointments); // Set appointments data in state
          console.log(response.data.appointments)
          console.log(appointments.length);
          { appointments.map((appointment) => console.log(appointment.appointment_id)) }
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    // Call the fetchAppointments function when the component mounts
    fetchAppointments();
  }, [user_email]);
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

  return (
    <div className="appointment-page">
      <main className="body2">
        <main className="table-container">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Appointment ID</th>
                <th>Expert Name</th>
                <th>Appointment Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments &&
                appointments.length > 0 &&
                appointments.map((appointment) => (
                  <tr key={appointment.appointment_id}>
                    <td>{appointment.appointment_id}</td>
                    <td>{appointment.expert_id}</td>
                    <td>
                      {new Date(appointment.appointment_date).toLocaleString()}
                    </td>
                    <td>{appointment.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
      </main>
      <div className="navbar2">
        <div className="icon3">
          <img className="removal-1-icon3" alt="" src="/removal-1@2x.png" />
          <div className="reachout3">ReachOut!</div>
        </div>
        <div className="links3">
          <div className="find-expertise2" onClick={onFindExpertiseTextClick}>
            Find Expertise
          </div>
          <div className="find-expertise2" onClick={onAppointmentsTextClick}>
            Appointments
          </div>
          <div className="find-expertise2" onClick={onProfileTextClick}>
            Profile
          </div>
          <div className="find-expertise2" onClick={onLogoutTextClick}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
