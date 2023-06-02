import RoomItem from "./RoomItem";
import { useQuery } from "react-query";
import { fetchData } from "../config/firebase";
import { CircularProgress } from "@mui/material";




function RoomList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["NumberOfRooms"], 
    queryFn: () => fetchData("/Rooms/"),
  });

  if (isLoading) return <CircularProgress />;

  if (error) return "An error has occurred: " + error.message;

  return (
    data.map(({index}) => <RoomItem text={`Room/${index}`}/>)
  );
}

export default RoomList;
