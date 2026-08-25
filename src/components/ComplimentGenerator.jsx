import { useState } from "react";
import "./ComplimentGenerator.css";
import compliments from "../data/compliments";

const initialCompliment = " 🤖 AI knows a few things I never said out loud… 👀";

function ComplimentGenerator({ isActive, onViewGallery }) {
  const [compliment, setCompliment] = useState(initialCompliment);
  const [count, setCount] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const getCompliment = () => {
    setCompliment((currentCompliment) => {
      let nextCompliment = currentCompliment;

      while (nextCompliment === currentCompliment && compliments.length > 1) {
        const randomIndex = Math.floor(Math.random() * compliments.length);
        nextCompliment = compliments[randomIndex];
      }

      return nextCompliment;
    });
    setCount((prev) => prev + 1);
    setAnimationKey((prev) => prev + 1);
  };

  return (
    <section
      className={`compliment-generator ${isActive ? "compliment-active" : ""}`}
    >
      <div className="compliment-container">
        <div className="compliment-icon">💌</div>

        <h1>💌 A Few Things I Want To Tell You</h1>

        <p className="compliment-subtitle">
          I could say these myself... but this seemed more fun 😌
        </p>

        <div className="compliment-card">
          <div key={animationKey} className="compliment-result">
            {compliment}
          </div>

          <button className="compliment-btn" onClick={getCompliment}>
            Okay… let’s see what I wanted to tell you 👀❤️
          </button>

          <p className="compliment-count">
            {count === 0
              ? "No compliments discovered yet 👀"
              : `${count} compliment${count > 1 ? "s" : ""} discovered`}
          </p>
        </div>

        {/* {onViewGallery && (
          <button
            type="button"
            className="compliment-gallery-btn"
            onClick={onViewGallery}
          >
            📸 View Our Memories
          </button>
        )} */}
      </div>
    </section>
  );
}

export default ComplimentGenerator;
