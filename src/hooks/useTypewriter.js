import { useState, useEffect, useRef } from 'react';

/**
 * Typewriter effect hook. Types out an array of strings sequentially.
 *
 * @param {string[]} lines - Array of strings to type.
 * @param {Object} options
 * @param {number} options.typeSpeed - Ms per character. Default 60.
 * @param {number} options.deleteSpeed - Ms per character when deleting. Default 40.
 * @param {number} options.pauseTime - Ms to pause after completing a line. Default 2000.
 * @param {boolean} options.loop - Whether to loop through lines. Default false.
 * @param {boolean} options.startOnView - Only start when triggered. Default false.
 * @param {boolean} options.inView - Whether element is in view. Default true.
 */
export default function useTypewriter(
  lines = [],
  {
    typeSpeed = 60,
    deleteSpeed = 40,
    pauseTime = 2000,
    loop = false,
    inView = true,
  } = {}
) {
  const [displayText, setDisplayText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const started = useRef(false);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!inView || lines.length === 0 || isComplete) return;

    started.current = true;
    const currentLine = lines[lineIndex];

    let timeout;

    if (!isDeleting) {
      // Typing
      if (charIndex < currentLine.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentLine.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typeSpeed);
      } else {
        // Finished typing current line
        if (lineIndex === lines.length - 1 && !loop) {
          // Last line, no loop — done
          setIsComplete(true);
          return;
        }

        // Pause then delete (if looping or more lines)
        timeout = setTimeout(() => {
          if (loop || lineIndex < lines.length - 1) {
            setIsDeleting(true);
          }
        }, pauseTime);
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentLine.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, deleteSpeed);
      } else {
        // Finished deleting — move to next line
        setIsDeleting(false);
        const nextIndex = (lineIndex + 1) % lines.length;
        setLineIndex(nextIndex);
        if (nextIndex === 0 && !loop) {
          setIsComplete(true);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, lines, typeSpeed, deleteSpeed, pauseTime, loop, inView, isComplete]);

  return {
    displayText,
    isComplete,
    isTyping: !isComplete && !isDeleting,
    cursor: showCursor ? '▌' : ' ',
  };
}
