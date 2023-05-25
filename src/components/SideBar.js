import { useState } from "react";
import Avatar from "./Avatar";
import SideBarElement from "./SideBarElement";


function SideBar() {
  const [isOpen, setIsOpen] = useState(true);
  return isOpen ? (
    <navbar className=" basis-1/6 h-full  bg-sky-500 ">
      <button onClick={() => setIsOpen(false)}>Fermer</button>
      <Avatar />
      <SideBarElement text='dashboard' icon='home' />
    </navbar>
  ) : (
    <div>
      <button onClick={() => setIsOpen(true)}>OUVRIR</button>
    </div>
  );
}
export default SideBar;
