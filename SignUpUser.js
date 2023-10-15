import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpUser.css";
import axios from "axios";

const SignUpUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    education: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://monthly-guided-cow.ngrok-free.app/register",
        formData
      );

      if (response.status === 201) {
        console.log("User registration successful");
        // Redirect or display a success message here
      } else {
        console.error("User registration failed:", response.data.error);
        // Handle registration failure, e.g., display an error message
      }
    } catch (error) {
      console.error("Error during registration:", error);
      // Handle other errors, e.g., network errors
    }
  };

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
    <div className="sign-up-user">
      <main className="body6">
        <div className="sign-up-sec">
          <form
            className="sign-up-form"
            id="sign_up_form"
            onSubmit={handleSignUp}
          >
            <div className="join-us">Join Us</div>
            <div className="name">
              <div className="password">Name</div>
              <input
                className="name-input"
                name="name"
                id="name"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="name">
              <div className="password">Email</div>
              <input
                className="name-input"
                name="email"
                id="email"
                placeholder="Email"
                type="email"
              />
            </div>
            <div className="name">
              <div className="password">Password</div>
              <input
                className="name-input"
                name="pass"
                id="pass"
                placeholder="Password"
                type="password"
              />
            </div>
            <div className="name">
              <div className="password">Education</div>
              <input
                className="name-input"
                name="edu"
                id="edu"
                placeholder="Education"
                type="text"
              />
            </div>
            <div className="confirm-password">Confirm Password</div>
            <div className="sign-up-form-child" />
            <div className="name">
              <div className="password">Country</div>
              <input
                className="name-input"
                name="country"
                id="country"
                placeholder="Country"
                type="text"
              />
            </div>
            <button className="sign-up-bttn1">
              <div className="sign-up">Sign Up</div>
            </button>
          </form>
          <div className="have-an-account" onClick={onHaveAnAccountClick}>
            Have an account? Login here
          </div>
          <div className="divider">
            <div className="divider1" />
            <div className="or">OR</div>
            <div className="divider1" />
          </div>
          <div className="social-media-signuplogin-parent">
            <div className="social-media-signuplogin">
              <div className="social-media-logo-parent">
                <img
                  className="social-media-logo"
                  alt=""
                  src="/social-media-logo.svg"
                />
                <div className="or">Continue with Google</div>
              </div>
            </div>
            <div className="social-media-signuplogin">
              <div className="social-media-logo-group">
                <img
                  className="social-media-logo1"
                  alt=""
                  src="/social-media-logo1.svg"
                />
                <div className="or">Continue with Apple</div>
              </div>
            </div>
          </div>
        </div>
        <div className="body-heading">
          <h1 className="your-academic-journey-container">
            <p className="your-academic-journey">{`Your Academic Journey, `}</p>
            <p className="your-academic-journey">Our Expertise</p>
          </h1>
          <h6 className="begin-your-journey">Begin Your Journey</h6>
        </div>
      </main>
      <header className="nav-lr1">
        <div className="icon7">
          <img className="removal-1-icon7" alt="" src="/removal-1@2x.png" />
          <div className="reachout7">ReachOut!</div>
        </div>
        <div className="links7">
          <div className="our-services1" onClick={onOurServicesTextClick}>
            Our Services
          </div>
          <div className="our-services1" onClick={onOurExpertsTextClick}>
            Our Experts
          </div>
          <div className="our-services1" onClick={onAboutUsTextClick}>
            About Us
          </div>
        </div>
      </header>
    </div>
  );
};

export default SignUpUser;
