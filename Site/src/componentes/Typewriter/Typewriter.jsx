import { useState, useEffect } from "react";

function Typewriter({ text, textSize, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = -1;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(intervalId);
    }, speed);

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [text, speed]);

  return <h2 className={`text-${textSize} text-white font-bold animate-fadeIn`}>{displayedText}</h2>;
}

export default Typewriter;
