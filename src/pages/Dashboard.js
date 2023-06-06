import { useState, createContext, useEffect } from "react";
import DashboardBody from "../components/DashboardBody";
import SideBar from "../components/SideBar";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const location = useLocation();

  console.log(location.state.uid);

  return (
    <SideBar>
      <DashboardBody />
    </SideBar>
  );
}

export default Dashboard;
