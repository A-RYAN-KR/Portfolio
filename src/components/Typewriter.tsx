import { useEffect, useState } from "react";

interface Props {
  phrases: string[];
  typingSpeed?: number;
  delayBetweenPhrases?: number;
}

function Typewriter({
  phrases,
  typingSpeed = 100,
  delayBetweenPhrases = 1500,
}: Props) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const animateText = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          const timeout = setTimeout(() => {
            setCurrentText(currentPhrase.slice(0, currentText.length + 1));
          }, typingSpeed);
          return () => clearTimeout(timeout);
        } else {
          const timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenPhrases);
          return () => clearTimeout(timeout);
        }
      } else {
        if (currentText.length > 0) {
          const timeout = setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, typingSpeed / 2);
          return () => clearTimeout(timeout);
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex(
            (prevIndex) => (prevIndex + 1) % phrases.length
          );
        }
      }
    };

    const timeout = animateText();
    return () => timeout && timeout();
  }, [
    currentText,
    isDeleting,
    currentPhraseIndex,
    phrases,
    typingSpeed,
    delayBetweenPhrases,
  ]);

  return (
    <span className="inline-block text-cyan-500">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default Typewriter;
