import { useEffect, useState } from "react";
import Wordlist from "../../assets/data/Wordlist.json";
import "../Blankfield/Blankfield.css";

const Blankfield = ({ pressedKey }) => {
  const randomNumber = Math.trunc(Math.random() * 20);

  const [guessWord, setGuessWord] = useState("");
  const [guessedLetter, setGuessedLetter] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);

  useEffect(() => {
    setGuessWord(Wordlist.words[randomNumber]);
  }, []);

  useEffect(() => {
    setGuessedLetter(pressedKey);
  }, [pressedKey]);

  const guessWordArray = guessWord.split("");

  useEffect(() => {
    if (guessWordArray.includes(guessedLetter)) {
      setCorrectLetters((prevLetter) => {
        if (!prevLetter.includes(guessedLetter)) {
          return [...prevLetter, guessedLetter];
        }
        return prevLetter;
      });
    }
  }, [guessedLetter, guessWordArray]);

  const isWordCorrect = () => {
    console.log(correctLetters);
    console.log(guessWord);
    for (const i of guessWord) {
      console.log(i);
      if (correctLetters.includes(i)) {
        console.log("YES IM IN");
      }
    }
  };

  isWordCorrect();
  return (
    <section className='blankfield'>
      {guessWordArray.map((item, index) => (
        <div
          key={index}
          className='blank'>
          <p>{correctLetters.includes(item) ? item : ""}</p>
        </div>
      ))}
    </section>
  );
};

export default Blankfield;
