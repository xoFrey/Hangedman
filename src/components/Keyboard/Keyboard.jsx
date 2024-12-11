import { useState } from "react";
import Letters from "../../assets/data/Letter.json";
import "../Keyboard/Keyboard.css";

const Keyboard = ({ setPressedKey }) => {
  return (
    <section className='keyboard'>
      <div className='letters'>
        {Letters.slice(0, 10).map((item) => (
          <div
            onClick={() => setPressedKey(item.value)}
            className='letter'
            key={item.id}>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div className='letters'>
        {Letters.slice(10, 19).map((item) => (
          <div
            onClick={() => setPressedKey(item.value)}
            className='letter'
            key={item.id}>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div className='letters'>
        {Letters.slice(9).map((item) => (
          <div
            onClick={() => setPressedKey(item.value)}
            className='letter'
            key={item.id}>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keyboard;
