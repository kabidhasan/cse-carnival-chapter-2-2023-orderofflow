import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./HomepageUser.css";

const HomepageUser = () => {
  const navigate = useNavigate();
  const [experts, setExperts] = useState([]); // Store the experts data

  // Function to fetch experts data from the API
  const fetchExperts = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://monthly-guided-cow.ngrok-free.app/getAllExperts"
      );

      if (response.status === 200) {
        setExperts(response.data.experts);
      } else {
        console.error("Failed to fetch experts data.");
      }
    } catch (error) {
      console.error("Error while fetching experts data:", error);
    }
  }, []);

  const onViewTextClick = useCallback(
    (expertId) => {
      navigate(`/expertise-page/${expertId}`);
    },
    [navigate]
  );

  const onFindExpertiseTextClick = () => {
    navigate("/");
  };

  const onAppointmentsTextClick = () => {
    navigate("/appointment-page");

    
  }

  const onProfileTextClick = () => {
    navigate("/");
  };

  const onLogoutTextClick = () => {
    navigate("/");
  };

  useEffect(() => {
    // Fetch experts data when the component mounts
    fetchExperts();
  }, [fetchExperts]);

  return (
    <div className="homepage-user">
      <main className="body5">
        {/* Filter and search elements here */}
        {/* ... */}

        <div className="card-body">
          {experts.map((expert) => (
            <div className="user-card1" key={expert.id}>
              <img
                className="user-card-child"
                alt=""
                src={"ellipse-4@2x.png"}
              />
              <div className="sarah-han2">{expert.username}</div>
              <div className="filter">{expert.expertise}</div>
              {/* <div className="filter">{`#${expert.rating}`}</div> */}
              <div className="filter">Rating: 4.5 out of 5</div>
              <div
                className="view"
                onClick={() => onViewTextClick(expert.expert_id)}
              >
                View
              </div>
            </div>
          ))}
        </div>
      </main>
      <div className="navbar4">
        <div className="icon5">
          <img className="removal-1-icon5" alt="" src="/removal-1@2x.png" />
          <div className="reachout5">ReachOut!</div>
        </div>
        <div className="links5">
          <div className="find-expertise4" onClick={onFindExpertiseTextClick}>
            Find Expertise
          </div>
          <div className="find-expertise4" onClick={onAppointmentsTextClick}>
            Appointments
          </div>
          <div className="find-expertise4" onClick={onProfileTextClick}>
            Profile
          </div>
          <div className="find-expertise4" onClick={onLogoutTextClick}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageUser;
