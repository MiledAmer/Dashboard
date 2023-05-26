import DashboardBody from "./DashboardBody";
import PersistentDrawerLeft from "./PersistentDrawerLeft";
import SignIn from "./SignIn";

import { QueryClient, QueryClientProvider } from "react-query";
// <PersistentDrawerLeft />
const queryClient = new QueryClient();

function App() {
  return (
    <div>
     <SignIn/>
     
    </div>
  );
}

export default App;
