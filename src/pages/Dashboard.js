import DashboardBody from "../components/DashboardBody";
import PersistentDrawerLeft from "../components/PersistentDrawerLeft";


function Dashboard (){
    return(
        <PersistentDrawerLeft children={<DashboardBody/>}/>
    );
}

export default Dashboard;