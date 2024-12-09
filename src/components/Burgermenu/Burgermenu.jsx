import { RiMenuFill, RiCloseLargeFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import "../Burgermenu/Burgermenu.css";
import { useState } from "react";

const Burgermenu = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <div
      className='burger'
      onClick={() => setOpenBurger(!openBurger)}>
      {openBurger ? (
        <RiCloseLargeFill size={"30px"} />
      ) : (
        <RiMenuFill size={"30px"} />
      )}
    </div>
  );
};

export default Burgermenu;
