import DashboardBody from "./DashboardBody";
import SideBar from "./SideBar";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div class="w-screen h-screen flex flex-row m-t ">
      <QueryClientProvider client={queryClient}>
        <SideBar />
        <DashboardBody />
        
      </QueryClientProvider>
    </div>
  );
}

export default App;
