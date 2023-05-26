import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import StorageIcon from '@mui/icons-material/Storage';


function RoomItem({text}){
    
    return(
        <div>
             <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   <StorageIcon/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
        </div>
    )
}
export default RoomItem;