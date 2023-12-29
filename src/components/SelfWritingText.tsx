import { useEffect, useState } from "react";

export const SelfWritingText = () => {
  const [text, setText] = useState('');
  const [isAdding, setIsAdding] = useState<boolean>(true);
  const [index, setIndex] = useState<number>(0);
  const [pace, setPace] = useState<number>(250);
  const [sentence, setSentence] = useState('I build things for the web.');

  useEffect(() => {
    const changeSentence = () => {
      const sentences = [
        "I build things for the web.",
        "I love coding.",
        "I code in TypeScript.",
        "I use React as my framework.",
      ]

      setSentence(sentences[Math.floor(Math.random() * 4)])
    }

    const addLetter = () => {
      if (index === sentence.length) {
        setIsAdding(false);
      } else {
        setText((prevText) => prevText + sentence[index]);
        setIndex((p) => p + 1);
        console.log("Adding index:" + index)
      }
    }

    const removeLetter = () => {
      if (index === 0) {
        setIsAdding(true)
        changeSentence();
      } else {
        setText((prevText) => prevText.slice(0, -1));
        setIndex((p) => p - 1)
        console.log("Removing index:" + index)
      }
    };

    const interval = setInterval(() => {
      if (isAdding) {
        setPace(250);
        addLetter();
      } else if (!isAdding) {
        setPace(50);
        removeLetter();
      }
    }, pace);

    return () => clearInterval(interval);
  }, [isAdding, index, pace, sentence]);

  return <div>{text}</div>;
};