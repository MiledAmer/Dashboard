import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../config/firebase";
import SignUpButton from "./SignUpButton";
import { useLocation } from "react-router";
 
function AdminSpecifics() {
    const location = useLocation();
    const uid = location.state.uid;
    const { isLoading, error, data } = useQuery({
                queryKey:['AdminSpecifics'], 
                queryFn:() =>fetchData("/Users/")
            })
    
    if (isLoading) return 'Loading...'
  
    if (error) return null  
    const buttons = data[uid] === "IsAdmin"? <SignUpButton/>:null
    return (
        buttons
    )
}

export default AdminSpecifics;
