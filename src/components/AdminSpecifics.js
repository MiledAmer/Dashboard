import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../config/firebase";
import SignUpButton from "./SignUpButton";
import { useLocation } from "react-router";
import DisplayUserButton from "./DisplayUserButton";
 
function AdminSpecifics() {
    const location = useLocation();
    const Email = location.state.email;
    const { isLoading, error, data } = useQuery({
                queryKey:['AdminSpecifics'], 
                queryFn:() =>fetchData("/Users/")
            })
    
    if (isLoading) return 'Loading...'
  
    if (error) return null  
    
    return (
        data[Email].Role === "IsAdmin"? [<SignUpButton/>, <DisplayUserButton/>] : null 
    )
}

export default AdminSpecifics;
