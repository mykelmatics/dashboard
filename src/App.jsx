import "./App.css";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
import DoughnutChart from "./components/DoughnutChart/DoughnutChart";
import InfoCard from "./components/InfoCard/InfoCard";
import { LineChart } from "./components/LineChart/LineChart";
import LocationChart from "./components/LocationChart/LocationChart";
import UserBarChart from "./components/UserBarChart/UserBarChart";
import { userInfoData } from "./utils/constant";

function App() {
  return (
    <>
      <DashboardHeader />
      <div className="first-section">
        <div className="userInfo-card-container">
          {userInfoData.map(({ id, icon, title, value }) => {
            return (
              <InfoCard
                key={id}
                id={id}
                Icon={icon}
                label={title}
                value={value}
              />
            );
          })}
        </div>
        <UserBarChart />
      </div>
      <div className="second-section">
        <LocationChart />
        <DoughnutChart />
        <LineChart />
      </div>
    </>
  );
}

export default App;
