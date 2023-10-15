import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpExpert.css";

const SignUpExpert = () => {
  const navigate = useNavigate();

  const onSignUpBttnClick = useCallback(() => {
    navigate("/signup-pt-2");
  }, [navigate]);

  const onHaveAnAccountClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onOurServicesTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onOurExpertsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutUs']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="sign-up-expert">
      <main className="body7">
        <div className="sign-up-sec1">
          <form className="sign-up-form1" id="sign_up_form">
            <div className="join-us1">Join Us</div>
            <div className="name2">
              <div className="name3">Name</div>
              <input className="name-input1" type="text" />
            </div>
            <div className="name2">
              <div className="name3">Email</div>
              <input
                className="email-input1"
                name="email"
                id="email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="name2">
              <div className="name3">Password</div>
              <input
                className="email-input1"
                name="pass"
                id="pass"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="name2">
              <div className="name3">Education</div>
              <input
                className="email-input1"
                name="edu"
                id="edu"
                placeholder="Education"
                type="text"
              />
            </div>
            <div className="confirm-password1">Confirm Password</div>
            <div className="sign-up-form-item" />
            <div className="name2">
              <div className="name3">Country</div>
              <input
                className="email-input1"
                name="country"
                id="country"
                placeholder="Country"
                type="text"
              />
            </div>
            <div className="score-sec">
              <div className="toefl">
                <div className="toefl-score">IELTS Score</div>
                <input
                  className="ielts-child"
                  name="ielts_score"
                  id="ielts_score"
                  type="number"
                />
              </div>
              <div className="toefl">
                <div className="toefl-score">TOEFL Score</div>
                <input
                  className="ielts-child"
                  name="toefl"
                  id="toefle"
                  type="number"
                />
              </div>
              <div className="toefl">
                <div className="toefl-score">GRE Score</div>
                <input
                  className="ielts-child"
                  name="gre"
                  id="gre"
                  type="number"
                />
              </div>
              <div className="toefl">
                <div className="toefl-score">SAT Score</div>
                <input
                  className="ielts-child"
                  name="sat"
                  id="sat"
                  type="number"
                />
              </div>
            </div>
            <button className="sign-up-bttn2" onClick={onSignUpBttnClick}>
              <div className="next1">NEXT</div>
            </button>
          </form>
          <div className="have-an-account1" onClick={onHaveAnAccountClick}>
            Have an account? Login here
          </div>
        </div>
        <div className="body-heading1">
          <h1 className="lend-us-your-container">
            <p className="lend-us-your">Lend Us Your</p>
            <p className="lend-us-your">Expertise,</p>
            <p className="lend-us-your">Spread Knowledge</p>
          </h1>
          <h6 className="begin-your-journey1">Begin Your Journey</h6>
        </div>
      </main>
      <header className="nav-lr2">
        <div className="icon8">
          <img className="removal-1-icon8" alt="" src="/removal-1@2x.png" />
          <div className="reachout8">ReachOut!</div>
        </div>
        <div className="links8">
          <div className="our-services2" onClick={onOurServicesTextClick}>
            Our Services
          </div>
          <div className="our-services2" onClick={onOurExpertsTextClick}>
            Our Experts
          </div>
          <div className="our-services2" onClick={onAboutUsTextClick}>
            About Us
          </div>
        </div>
      </header>
    </div>
  );
};

export default SignUpExpert;
