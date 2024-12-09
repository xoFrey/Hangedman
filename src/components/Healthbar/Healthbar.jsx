import { FaHeart } from "react-icons/fa";
import "../Healthbar/Healthbar.css";

const Healthbar = () => {
  return (
    <div className='health'>
      <FaHeart />
      <div className='healthbar'>
        <div className='hp'></div>
      </div>
    </div>
  );
};

export default Healthbar;
