import React from "react";

/**
 * props:
 *  - data: { question: string, options: string[], answerIndex: number }
 *  - selectedIndex: number | null
 *  - onSelect(idx: number): void
 */
export default function Question({ data, selectedIndex, onSelect }) {
  return (
    <div className="question-card">
      <h3 className="q-text">{data.question}</h3>
      <div className="options">
        {data.options.map((opt, idx) => {
          const selected = selectedIndex === idx;
          return (
            <button
              key={idx}
              className={`option ${selected ? "selected" : ""}`}
              onClick={() => onSelect(idx)}
              disabled={selectedIndex !== null}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
