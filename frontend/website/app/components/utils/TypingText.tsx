"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function TypingText({ texts }: { texts: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = texts[wordIndex];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, texts]);

  return (
    <motion.span
      key={wordIndex}
      className="text-neutral-400 text-sm whitespace-nowrap"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {texts[wordIndex].slice(0, charIndex)}
    </motion.span>
  );
}

export default TypingText;
