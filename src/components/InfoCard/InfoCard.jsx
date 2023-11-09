import "./style.css";

const InfoCard = ({ id, Icon, label, value }) => {
  return (
    <div className="userInfo-card">
      <div className="userInfo-wrapper">
        <div className={`userInfo-icon ${id === 1 ? "first-icon" : id === 2 ? "second-icon" : id === 3 ? "third-icon" : "fourth-icon"}`}>
          {/* <img src={icon} alt="icon" /> */}
          <Icon />
        </div>
        <div className="userInfo-type">
          <span className="userInfo-label-type normal-text">{label}</span>
          <span className="userInfo-value-type xl-text">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
