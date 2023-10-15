import { useState, useCallback } from "react";
import ConfPop from "../components/ConfPop";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./SignupPt2.css";

const SignupPt2 = () => {
  const [isConfPopOpen, setConfPopOpen] = useState(false);
  const navigate = useNavigate();

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

  const openConfPop = useCallback(() => {
    setConfPopOpen(true);
  }, []);

  const closeConfPop = useCallback(() => {
    setConfPopOpen(false);
  }, []);

  return (
    <>
      <div className="signup-pt-2">
        <main className="body">
          <div className="what-are-the">
            What are the Services you want to provide?
          </div>
          <div className="one-time-session">One time session</div>
          <div className="one-time-session1">One time session</div>
          <div className="one-time-session2">One time session</div>
        </main>
        <div className="navbar">
          <div className="icon1">
            <img className="removal-1-icon1" alt="" src="/removal-1@2x.png" />
            <div className="reachout1">ReachOut!</div>
          </div>
          <div className="links1">
            <div className="find-expertise" onClick={onFindExpertiseTextClick}>
              Find Expertise
            </div>
            <div className="find-expertise" onClick={onAppointmentsTextClick}>
              Appointments
            </div>
            <div className="find-expertise" onClick={onProfileTextClick}>
              Profile
            </div>
            <div className="find-expertise" onClick={onLogoutTextClick}>
              Logout
            </div>
          </div>
        </div>
        <button className="sign-up-bttn" onClick={openConfPop}>
          <div className="next">NEXT</div>
        </button>
      </div>
      {isConfPopOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfPop}
        >
          <ConfPop onClose={closeConfPop} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignupPt2;
