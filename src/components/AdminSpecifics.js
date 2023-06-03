import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../config/firebase";
import RoomItem from "./RoomItem";

 
function AdminSpecifics() {
    const { isLoading, error, data } = useQuery({
                queryKey:['AdminSpecifics'], 
                queryFn:() =>fetchData("/Users/")
            })
    
    if (isLoading) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message
  
    return (
      <ul>
            {
                Object.values(data).map((roomdata) => <RoomItem text={roomdata.RoomName}/> )
            }
      </ul>
    )
}

export default RoomList;
