import { getDatabase, ref, child, get } from "firebase/database";
import { useQuery, useQueryClient } from "react-query";
import RoomItem from "./RoomItem";

function getData() {
  const dbRef = ref(getDatabase());
  return (get(child(dbRef, "Rooms/"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    }));
}

getData();

function RoomList() {
  const { data, status } = useQuery("data", getData);

  if (status === "loading") {
    return <p>loading...</p>;
  }
  if (status === "error") {
    return <p>Error!</p>;
  }
  return data.map(() => <RoomItem text="roomX" />);
}

export default RoomList;
