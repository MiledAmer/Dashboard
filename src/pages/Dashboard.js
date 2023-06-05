import DashboardBody from "../components/DashboardBody";
import SideBar from "../components/SideBar";



function Dashboard (){
    return(
        <SideBar children={<DashboardBody/>}/>
        
    );
    
}

export default Dashboard;