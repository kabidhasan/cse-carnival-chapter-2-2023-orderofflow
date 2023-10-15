import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpertHomepage.css";

const ExpertHomepage = () => {
  const navigate = useNavigate();

  const onStatBttnContainerClick = useCallback(() => {
    navigate("/expert-request-approve");
  }, [navigate]);

  const onStatBttnClick = useCallback(() => {
    navigate("/expert-request-approve");
  }, [navigate]);

  const onStatBttn1Click = useCallback(() => {
    navigate("/expert-request-approve");
  }, [navigate]);

  const onFindExpertiseTextClick = useCallback(() => {
    navigate("/expert-homepage");
  }, [navigate]);

  const onLogoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="expert-homepage">
      <main className="body14" id="body">
        <div className="pending-requests">Pending Requests</div>
        <div className="request-list">
          <div className="head-tabl3">
            <div className="client-id">Client Id</div>
            <div className="client-id">Client Name</div>
            <div className="client-id">Service</div>
            <div className="client-id">Status</div>
          </div>
          <div className="row9">
            <div className="client-time">Client Id</div>
            <div className="client-time">Client Time</div>
            <div className="client-time">Service Typ</div>
            <div className="stat-bttn4" onClick={onStatBttnContainerClick}>
              <div className="status14">approve</div>
            </div>
          </div>
          <div className="row9">
            <div className="client-time">Client Id</div>
            <div className="client-time">Client Time</div>
            <div className="client-time">Service Typ</div>
            <button className="stat-bttn5" onClick={onStatBttnClick}>
              <div className="status15">approve</div>
            </button>
          </div>
          <div className="row9">
            <div className="client-time">Client Id</div>
            <div className="client-time">Client Time</div>
            <div className="client-time">Service Typ</div>
            <button className="stat-bttn5" onClick={onStatBttn1Click}>
              <div className="status15">approve</div>
            </button>
          </div>
        </div>
      </main>
      <div className="navbar8">
        <div className="icon13">
          <img className="removal-1-icon14" alt="" src="/removal-1@2x.png" />
          <div className="reachout14">ReachOut!</div>
        </div>
        <div className="links13">
          <div className="find-expertise8" onClick={onFindExpertiseTextClick}>
            Requests
          </div>
          <div className="client-id">Appointments</div>
          <div className="client-id">Profile</div>
          <div className="find-expertise8" onClick={onLogoutTextClick}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertHomepage;
