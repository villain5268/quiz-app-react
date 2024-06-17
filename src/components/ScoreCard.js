// src/components/ScoreCard.js
import React from 'react';

const ScoreCard = ({ score, totalQuestions }) => {
    return (
        <div className="score-card">
            <h3>Score: {score}/{totalQuestions}</h3>
        </div>
    );
};

export default ScoreCard;
