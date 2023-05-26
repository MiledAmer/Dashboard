import DashboardBody from "./DashboardBody";
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import SideBar from "./SideBar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div> <PersistentDrawerLeft/>
    </div>
    
  );
}

export default App;
