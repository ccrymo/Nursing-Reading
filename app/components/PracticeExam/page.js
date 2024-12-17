"use client";

import React, { useState, useEffect } from "react";
import Question from "./UI/Question";
import ReadingText from "./UI/ReadingText";
import SubmitButton from "./UI/SubmitButton";
import Header from "./UI/Header";
import CompletionModal from "./UI/CompletionModal";
import quizData from "../../data/practiceExam/practiceExam";

export default function Home() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [isQuestionView, setIsQuestionView] = useState(false);
  const [showAnswerOverlay, setShowAnswerOverlay] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const paragraphs = quizData.readingText.split("\n\n");

  useEffect(() => {
    console.log("quizData in useEffect:", quizData);
    if (quizData.questions) {
      console.log("Total questions:", quizData.questions.length);
      setTotalQuestions(quizData.questions.length);
    }
  }, []);

  const handleTimeUp = () => {
    setIsTimeUp(true);
  };

  const handleSelect = (questionNumber, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`question_${questionNumber}`]: option,
    }));
    setIsAnswerSelected(true);
  };

  const handleOverlayClose = () => {
    setShowAnswerOverlay(false);
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsQuizCompleted(true);
    }
    setIsAnswerSelected(false);
  };

  const handleSubmit = () => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const selectedAnswer = answers[`question_${currentQuestion.number}`];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setShowAnswerOverlay(true);
  };

  const getCurrentOverallQuestionNumber = () => {
    return currentQuestionIndex + 1;
  };

  const renderQuestions = () => {
    if (currentQuestionIndex >= totalQuestions) return null;

    const q = quizData.questions[currentQuestionIndex];
    const selectedAnswer = answers[`question_${q.number}`];
    const isCorrect = selectedAnswer === q.correctAnswer;

    return (
      <Question
        key={q.number}
        question={q.question}
        options={q.options}
        onSelect={(option) => handleSelect(q.number, option)}
        selectedAnswer={selectedAnswer}
        showOverlay={showAnswerOverlay}
        isCorrect={isCorrect}
        onOverlayClose={handleOverlayClose}
      />
    );
  };

  const handleCloseModal = () => {
    setIsQuizCompleted(false);
    setIsTimeUp(false);
  };

  const toggleView = () => {
    setIsQuestionView(!isQuestionView);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header
        currentQuestion={getCurrentOverallQuestionNumber()}
        totalQuestions={totalQuestions}
        correctAnswers={correctAnswers}
        onTimeUp={handleTimeUp}
        timeLimit={3600}
        isQuestionView={isQuestionView}
        onToggleView={toggleView}
        isQuizCompleted={isQuizCompleted}
        isTimeUp={isTimeUp}
      />

      <div className="flex flex-1 pt-16">
        <div className="hidden md:block md:w-1/2 h-full">
          <ReadingText content={paragraphs} title={quizData.readingTextTitle} />
        </div>
        <div className="hidden md:block md:w-1/2 h-full p-4 flex flex-col">
          <div className="overflow-y-auto flex-grow">{renderQuestions()}</div>
          <div className="mt-5">
            <SubmitButton onClick={handleSubmit} disabled={!isAnswerSelected} />
          </div>
        </div>

        <div className="w-full md:hidden">
          {!isQuestionView ? (
            <div className="h-[calc(100vh-120px)]">
              <ReadingText
                content={
                  quizData?.readingText
                    ? quizData.readingText.split("\n\n")
                    : []
                }
                title={quizData?.readingTextTitle || ""}
              />
            </div>
          ) : (
            <div className="p-4 h-[calc(100vh-120px)] flex flex-col">
              <div className="overflow-y-auto flex-grow">
                {renderQuestions()}
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <SubmitButton
                  onClick={handleSubmit}
                  disabled={!isAnswerSelected}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {(isQuizCompleted || isTimeUp) && (
        <CompletionModal
          score={correctAnswers}
          totalQuestions={totalQuestions}
          onClose={handleCloseModal}
          isTimeout={isTimeUp}
        />
      )}
    </div>
  );
}
