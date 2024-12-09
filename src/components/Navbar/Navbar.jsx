import Burgermenu from "../Burgermenu/Burgermenu";
import Healthbar from "../Healthbar/Healthbar";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Burgermenu />
      <Healthbar />
    </nav>
  );
};

export default Navbar;
