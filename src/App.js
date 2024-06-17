// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure Routes is imported
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from './components/Quiz';
import quizData from './data/quizData';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Routes> {/* Ensure routes are wrapped in <Routes> */}
                    <Route path="/" element={<Quiz quizData={quizData} />} /> {/* Use element prop for routing */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
