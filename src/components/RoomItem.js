import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import StorageIcon from "@mui/icons-material/Storage";
import { DataContext } from "./SideBar";
import { useContext } from "react";

function RoomItem({ text }) {
  const { updateLink } = useContext(DataContext);

  const handleOnClick = (e) =>{
    updateLink('Rooms/'+text)
  }
  return (
    <li>
      <ListItem key={text} disablePadding>
        <ListItemButton onClick={handleOnClick}>
          <ListItemIcon>
            <StorageIcon />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    </li>
  );
}
export default RoomItem;
