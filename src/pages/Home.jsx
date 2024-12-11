import { useState } from "react";
import Blankfield from "../components/Blankfield/Blankfield";
import Keyboard from "../components/Keyboard/Keyboard";
import Navbar from "../components/Navbar/Navbar";
import "../pages/Home.css";

const Home = () => {
  const [pressedKey, setPressedKey] = useState("");

  return (
    <main>
      <Navbar />
      <Blankfield pressedKey={pressedKey} />
      <Keyboard
        pressedKey={pressedKey}
        setPressedKey={setPressedKey}
      />
    </main>
  );
};

export default Home;
