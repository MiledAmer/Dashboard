import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./../config/firebase";
import RoomItem from "./RoomItem";



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
                Object.keys(data).map(({index}) => (<RoomItem text={`ROOM0${index}`}/>))
            }
      </ul>
    )
}

export default RoomList;