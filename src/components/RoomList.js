import { getDatabase, ref, child, get } from "firebase/database";
import { useQuery, useQueryClient } from "react-query";
import RoomItem from "./RoomItem";


function getData() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, "Rooms/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

getData();

function RoomList() {
  const queryClient = useQueryClient();
  const { data, status } = useQuery("data", getData);

  if (status === "loading") {
    return <p>loading...</p>;
  }
  if (status === "error") {
    return <p>Error!</p>;
  }
  return <RoomItem text="roomX" />;
}

export default RoomList;