import DashboardBody from "../components/DashboardBody";
import SideBar from "../components/SideBar";
import {useLocation} from 'react-router-dom';


function Dashboard (){
    const location = useLocation();
    console.log(location.state.uid);
    return(
        <SideBar children={<DashboardBody/>}/>
    );
}

export default Dashboard;