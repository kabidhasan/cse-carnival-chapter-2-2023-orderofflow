import { useState, useCallback } from "react";
import SignUpOption from "../components/SignUpOption";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [isSignUpOptionOpen, setSignUpOptionOpen] = useState(false);
  const navigate = useNavigate();

  const openSignUpOption = useCallback(() => {
    setSignUpOptionOpen(true);
  }, []);

  const closeSignUpOption = useCallback(() => {
    setSignUpOptionOpen(false);
  }, []);

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
    <>
      <div className="admin-login">
        <main className="body9" id="body">
          <div className="form-section1">
            <form className="login-form1" id="Login_form">
              <div className="login2">Login</div>
              <div className="email6">
                <div className="email7">Email</div>
                <input
                  className="email-input3"
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                />
              </div>
              <div className="email6">
                <div className="email7">Password</div>
                <input
                  className="email-input3"
                  name="password"
                  id="password"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <button className="login-bttn1">
                <div className="login3">Login</div>
              </button>
            </form>
            <a className="dont-have-an1" onClick={openSignUpOption}>
              Don’t have an account? Sign Up here
            </a>
            <div className="divider6">
              <div className="divider7" />
              <div className="or2">OR</div>
              <div className="divider7" />
            </div>
            <div className="social-media-signuplogin-container">
              <div className="social-media-signuplogin4">
                <div className="social-media-logo-parent1">
                  <img
                    className="social-media-logo4"
                    alt=""
                    src="/social-media-logo4.svg"
                  />
                  <div className="or2">Continue with Google</div>
                </div>
              </div>
              <div className="social-media-signuplogin4">
                <div className="social-media-logo-parent2">
                  <img
                    className="social-media-logo5"
                    alt=""
                    src="/social-media-logo1.svg"
                  />
                  <div className="or2">Continue with Apple</div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-heading3">
            <h1 className="hello-admin">Hello Admin</h1>
            <h6 className="login-here-to-container">
              <p className="login-here-to">{`Login Here to Manage `}</p>
              <p className="login-here-to">Your duties</p>
            </h6>
          </div>
        </main>
        <header className="nav-lr3">
          <div className="icon9">
            <img className="removal-1-icon9" alt="" src="/removal-1@2x.png" />
            <div className="reachout9">ReachOut!</div>
          </div>
          <div className="links9">
            <div className="our-services3" onClick={onOurServicesTextClick}>
              Our Services
            </div>
            <div className="our-services3" onClick={onOurExpertsTextClick}>
              Our Experts
            </div>
            <div className="our-services3" onClick={onAboutUsTextClick}>
              About Us
            </div>
          </div>
        </header>
      </div>
      {isSignUpOptionOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSignUpOption}
        >
          <SignUpOption onClose={closeSignUpOption} />
        </PortalPopup>
      )}
    </>
  );
};

export default AdminLogin;
