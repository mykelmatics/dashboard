import DropdownArrow from "../assets/dropdownArrow.svg";

import "./style.css";

const DashboardHeader = () => {
  return (
    <div className="dashboardHeader-container">
      <div className="dashboardAnalyticsTitle-wrapper">
        <div className="dashboardAnalytics-title xxl-text">User Analytics</div>
        <p className="dashboardAnalytics-subTitle md-text">
          Lorem ipsum dolor sit consectetur.
        </p>
      </div>
      <div className="userDropdown-wrappper">
        <span className="text-label lg-text">User</span>
        <img src={DropdownArrow} alt="dropdown-arrow" />
      </div>
    </div>
  );
};

export default DashboardHeader;
