import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ExpertRequestApprove.css";

const ExpertRequestApprove = () => {
  const navigate = useNavigate();

  const onSignUpBttnClick = useCallback(() => {
    navigate("/expert-appointmentlist");
  }, [navigate]);

  const onFindExpertiseTextClick = useCallback(() => {
    navigate("/expert-homepage");
  }, [navigate]);

  const onLogoutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="expert-request-approve">
      <main className="body12" id="body">
        <div className="service2">
          <div className="set-up-appointment">Set Up Appointment</div>
          <div className="email10">
            <div className="date">Date</div>
            <Form className="email-input5">
              <Form.Control type="date" />
            </Form>
          </div>
          <div className="email11">
            <div className="date">Time</div>
            <Form className="email-input5">
              <Form.Control type="text" />
            </Form>
          </div>
          <button className="sign-up-bttn4" onClick={onSignUpBttnClick}>
            <div className="done">Done</div>
          </button>
        </div>
        <div className="info2">
          <img className="info-inner" alt="" src="/ellipse-41@2x.png" />
          <div className="sarah-han8">Sarah Han</div>
          <div className="albarta-university-chcago-container2">
            <p className="albarta-university2">Albarta University</p>
            <p className="albarta-university2">Chcago University</p>
          </div>
          <div className="score6">
            <div className="ielts7">IELTS</div>
            <div className="ielts7">IELTS Score</div>
          </div>
          <div className="score6">
            <div className="ielts7">IELTS</div>
            <div className="ielts7">IELTS Score</div>
          </div>
          <div className="score6">
            <div className="ielts7">IELTS</div>
            <div className="ielts7">IELTS Score</div>
          </div>
          <div className="ielts7">#Rating</div>
        </div>
      </main>
      <div className="navbar6">
        <div className="icon11">
          <img className="removal-1-icon12" alt="" src="/removal-1@2x.png" />
          <div className="reachout12">ReachOut!</div>
        </div>
        <div className="links11">
          <div className="find-expertise6" onClick={onFindExpertiseTextClick}>
            Requests
          </div>
          <div className="appointments6">Appointments</div>
          <div className="appointments6">Profile</div>
          <div className="find-expertise6" onClick={onLogoutTextClick}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertRequestApprove;
