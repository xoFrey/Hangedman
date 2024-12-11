import { useEffect, useState } from "react";
import Wordlist from "../../assets/data/Wordlist.json";
import "../Blankfield/Blankfield.css";

const Blankfield = ({ pressedKey }) => {
  const randomNumber = Math.trunc(Math.random() * 20);

  const [guessWord, setGuessWord] = useState("");
  const [guessedLetter, setGuessedLetter] = useState("");

  console.log(guessedLetter);

  useEffect(() => {
    setGuessWord(Wordlist.words[randomNumber]);
  }, []);

  useEffect(() => {
    setGuessedLetter(pressedKey);
  }, [pressedKey]);

  console.log(guessWord);
  const guessWordArray = guessWord.split("");
  if (guessWordArray.includes(guessedLetter)) {
    console.log("YAY");
  } else {
    console.log("NAY");
  }

  return (
    <section className='blankfield'>
      {guessWordArray.map((item) => (
        <div
          key={item.id}
          className='blank'>
          <p>{}</p>
        </div>
      ))}
    </section>
  );
};

export default Blankfield;
