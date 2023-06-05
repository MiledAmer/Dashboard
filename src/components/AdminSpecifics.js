import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../config/firebase";
import SignUpButton from "./SignUpButton";
 
function AdminSpecifics() {
    const uid ="null;";
    const { isLoading, error, data } = useQuery({
                queryKey:['AdminSpecifics'], 
                queryFn:() =>fetchData("/Users/")
            })
    
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <ul>
            {
                data[uid] === "IsAdmin"? <SignUpButton/>:null
            }
      </ul>
    )
}

export default AdminSpecifics;
