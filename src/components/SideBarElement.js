import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";

function iconChoice(icon){
    if(icon === 'home'){
        return (<AiOutlineHome className="mr-2" />)
    }
}


function SideBarElement({text, icon}) {
  return (
    <div className="flex items-center">
      {iconChoice(icon)}
      <h3 className="text-lg">{text}</h3>
    </div>
  );
}
export default SideBarElement;
