import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminHomepage.css";

const AdminHomepage = () => {
  const navigate = useNavigate();

  const onExpertNameText1Click = useCallback(() => {
    navigate("/expertise-page-admin");
  }, [navigate]);

  const onExpertNameText2Click = useCallback(() => {
    navigate("/expertise-page-admin");
  }, [navigate]);

  const onExpertNameText3Click = useCallback(() => {
    navigate("/expertise-page-admin");
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

  return (
    <div className="admin-homepage">
      <main className="body1">
        <div className="expertise-list">Expertise List</div>
        <div className="appointment-list">
          <div className="head-tabl">
            <div className="expert-id">Expert Id</div>
            <div className="expert-id">Expert Name</div>
            <div className="expert-id">Country</div>
            <div className="expert-id">Status</div>
          </div>
          <div className="row">
            <div className="expertid">ExpertID</div>
            <div className="expert-name1" onClick={onExpertNameText1Click}>
              Expert Name
            </div>
            <div className="expertid">Country</div>
            <div className="stat-bttn1">
              <div className="expertid">Filter</div>
            </div>
          </div>
          <div className="row">
            <div className="expertid">ExpertID</div>
            <div className="expert-name1" onClick={onExpertNameText2Click}>
              Expert Name
            </div>
            <div className="expertid">Country</div>
            <div className="stat-bttn1">
              <div className="expertid">Filter</div>
            </div>
          </div>
          <div className="row">
            <div className="expertid">ExpertID</div>
            <div className="expert-name1" onClick={onExpertNameText3Click}>
              Expert Name
            </div>
            <div className="expertid">Country</div>
            <div className="stat-bttn1">
              <div className="expertid">Filter</div>
            </div>
          </div>
        </div>
      </main>
      <div className="navbar1">
        <div className="icon2">
          <img className="removal-1-icon2" alt="" src="/removal-1@2x.png" />
          <div className="reachout2">ReachOut!</div>
        </div>
        <div className="links2">
          <div className="find-expertise1" onClick={onFindExpertiseTextClick}>
            Find Expertise
          </div>
          <div className="find-expertise1" onClick={onAppointmentsTextClick}>
            Appointments
          </div>
          <div className="profile1" onClick={onProfileTextClick}>
            Profile
          </div>
          <div className="profile1" onClick={onLogoutTextClick}>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomepage;
