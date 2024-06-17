// src/components/Question.js
import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, handleAnswerClick }) => {
    const [feedback, setFeedback] = useState('');

    const handleClick = (isCorrect) => {
        if (isCorrect) {
            setFeedback('Correct!');
        } else {
            setFeedback('Wrong!');
        }
        setTimeout(() => handleAnswerClick(isCorrect), 500); // Adding a delay to show feedback before changing state
    };

    return (
        <div className="question">
            <h2>{question.question}</h2>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <button onClick={() => handleClick(option === question.correctAnswer)}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
            {feedback && <p className={`feedback ${feedback === 'Wrong!' ? 'wrong' : ''}`}>{feedback}</p>}
        </div>
    );
};

export default Question;
