import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable element
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a"
      );
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <>
      <div
        className="fixed w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.1s ease-out",
          transform: isPointer
            ? "translate(-50%, -50%) scale(1.5)"
            : "translate(-50%, -50%)",
        }}
      />
      <div
        className="fixed w-8 h-8 border-2 border-cyan-500 dark:border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          transition:
            "transform 0.15s ease-out, width 0.2s ease, height 0.2s ease",
          transform: isPointer
            ? "translate(-50%, -50%) scale(2)"
            : "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default CustomCursor;
