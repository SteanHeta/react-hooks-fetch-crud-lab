// QuestionItem.js
import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>{prompt}</h4>
      <h5>Answers:</h5>
      <ul>
        {answers.map((answer, i) => (
          <li key={i}>{answer}</li>
        ))}
      </ul>
      <label>
        Correct Answer:
        <select
          defaultValue={correctIndex}
          onChange={(e) => onUpdate(id, parseInt(e.target.value))}
        >
          {options}
        </select>
      </label>
      <button onClick={() => onDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
