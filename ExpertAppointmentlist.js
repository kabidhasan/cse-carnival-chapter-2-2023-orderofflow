import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpertAppointmentlist.css";

const ExpertAppointmentlist = () => {
  const navigate = useNavigate();

  const onFindExpertiseTextClick = useCallback(() => {
    navigate("/expert-homepage");
  }, [navigate]);

  const onLogoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="expert-appointmentlist">
      <div className="body13">
        <div className="appointment-list2">
          <div className="head-tabl2">
            <div className="client-name">Appoinment iD</div>
            <div className="client-name">Client Name</div>
            <div className="client-name">Appoinment Time</div>
            <div className="client-name">Status</div>
          </div>
          <div className="row6">
            <div className="appoinment-id5">Appoinment iD</div>
            <div className="appoinment-id5">Expert Name</div>
            <div className="appoinment-id5">Appoinment Time</div>
            <div className="appoinment-id5">Status</div>
          </div>
          <div className="row6">
            <div className="appoinment-id5">Appoinment iD</div>
            <div className="appoinment-id5">Expert Name</div>
            <div className="appoinment-id5">Appoinment Time</div>
            <div className="appoinment-id5">Status</div>
          </div>
          <div className="row6">
            <div className="appoinment-id5">Appoinment iD</div>
            <div className="appoinment-id5">Expert Name</div>
            <div className="appoinment-id5">Appoinment Time</div>
            <div className="appoinment-id5">Status</div>
          </div>
        </div>
        <div className="appointments7">Appointments</div>
      </div>
      <div className="navbar7">
        <div className="icon12">
          <img className="removal-1-icon13" alt="" src="/removal-1@2x.png" />
          <div className="reachout13">ReachOut!</div>
        </div>
        <div className="links12">
          <div className="find-expertise7" onClick={onFindExpertiseTextClick}>
            Requests
          </div>
          <div className="client-name">Appointments</div>
          <div className="client-name">Profile</div>
          <div className="find-expertise7" onClick={onLogoutTextClick}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertAppointmentlist;
