// src/components/Quiz.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import ScoreCard from './ScoreCard';
import { shuffleArray } from '../utils';
import './Quiz.css';

const Quiz = ({ quizData }) => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false);

    useEffect(() => {
        setQuestions(shuffleArray(quizData));
    }, [quizData]);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
            const nextQuestionIndex = currentQuestionIndex + 1;
            if (nextQuestionIndex < questions.length) {
                setCurrentQuestionIndex(nextQuestionIndex);
            } else {
                setQuizEnded(true);
            }
        } else {
            setWrongAnswer(true);
            setQuizEnded(true);
        }
    };

    const restartQuiz = () => {
        setQuestions(shuffleArray(quizData));
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizEnded(false);
        setWrongAnswer(false);
    };

    if (!questions.length) return <div>Loading...</div>;

    return (
        <div className="quiz-container">
            {quizEnded ? (
                <div className="quiz-ended">
                    <h2>{wrongAnswer ? "Wrong Answer!" : "Quiz Ended!"}</h2>
                    <ScoreCard score={score} totalQuestions={questions.length} />
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <Question
                    question={questions[currentQuestionIndex]}
                    handleAnswerClick={handleAnswerClick}
                />
            )}
        </div>
    );
};

export default Quiz;
