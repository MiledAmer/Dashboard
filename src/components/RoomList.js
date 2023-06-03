import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../config/firebase";
import RoomItem from "./RoomItem";

 function ElementName (data){
    //console.log(Object.values(data))
    Object.values(data).map((roomdata) => console.log(roomdata.RoomName));
    
}


function RoomList() {
    const { isLoading, error, data } = useQuery({
                queryKey:['RoomList'], 
                queryFn:() =>fetchData("/Rooms/")
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
