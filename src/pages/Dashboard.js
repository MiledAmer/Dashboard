import DashboardBody from "../components/DashboardBody";
import SideBar from "../components/SideBar";
import { useLocation } from "react-router-dom";

function Dashboard() {
  


  return (
    <SideBar>
      <DashboardBody />
    </SideBar>
  );
}

export default Dashboard;
