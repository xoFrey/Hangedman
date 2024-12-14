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

  const isTheWordComplete = (guessWordArray, correctLetters) => {
    const correctLettersCopy = [...correctLetters];

    for (let i = 0; i < guessWordArray.length, i++; ) {
      const index = correctLettersCopy.indexOf(i);
      console.log(i);
      console.log(correctLettersCopy);
      if (index !== -1) {
        correctLettersCopy.splice(index, 1);
      } else {
        console.log(correctLettersCopy);
        return false;
      }
    }
  };

  isTheWordComplete(guessWordArray, correctLetters);

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
