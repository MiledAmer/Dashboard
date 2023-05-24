import { useState } from "react";
import Avatar from "./Avatar";

function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <navbar class=" basis-1/6 h-full  bg-sky-500 ">
      <button onClick={() => setIsOpen(false)}>Fermer</button>
      <Avatar />
      
    </navbar>
  ) : (
    <div>
      <button onClick={() => setIsOpen(true)}>OUVRIR</button>
    </div>
  );
}
export default SideBar;
