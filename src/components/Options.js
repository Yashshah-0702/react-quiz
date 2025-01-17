import React from "react";

export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
                hasAnswered ? index === question.correctOption ? "correct" : "wrong" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
