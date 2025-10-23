import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const QuizPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch quiz from backend
 useEffect(() => {
  const fetchQuiz = async () => {
    try {
      const res = await axios.get("http://localhost:5000/quizzes");

      // ✅ Merge all questions into one array
      const allQuestions = res.data.flatMap((quiz) => quiz.questions);

      // ✅ Pick first 10 questions (or random 10)
      const selectedQuestions = allQuestions.slice(0, 7);

      // ✅ Create a single quiz object
      const mergedQuiz = {
        title: "Combined Knowledge Quiz",
        questions: selectedQuestions,
      };

      setQuiz(mergedQuiz);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching quiz:", err);
      setLoading(false);
    }
  };
  fetchQuiz();
}, []);


  if (loading) return <div className="text-center py-10 text-gray-500">Loading Quiz...</div>;
  if (!quiz) return <div className="text-center pt-30  pb-20 text-red-500">No quiz found.</div>;

  const currentQuestion = quiz.questions[currentIndex];

  // ✅ Handle answer selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    setShowExplanation(true);
    setIsCorrect(option === currentQuestion.correctAnswer);
  };

  // ✅ Handle next question
  const handleNext = () => {
    setShowExplanation(false);
    setSelectedOption(null);
    if (currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("🎉 Quiz Completed!");
    }
  };

  const progress = ((currentIndex + 1) / quiz.questions.length) * 100;

  return (
    <div className="min-h-screen bg-base-300 flex justify-center items-start pt-20 pb-10 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        
        {/* Progress bar */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Knowledge Quiz</h2>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Question {currentIndex + 1} / {quiz.questions.length}
          </p>
        </div>

        {/* Question */}
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {currentQuestion.questionText}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleSelect(option)}
              disabled={showExplanation}
              className={`w-full text-left px-4 py-3 rounded-lg border transition ${
                selectedOption === option
                  ? isCorrect
                    ? "border-green-400 bg-green-50"
                    : "border-red-400 bg-red-50"
                  : "border-gray-200 hover:border-purple-500 hover:bg-purple-50"
              }`}
            >
              {option}
              {showExplanation && selectedOption === option && (
                <span className="float-right">
                  {isCorrect ? (
                    <CheckCircle className="inline text-green-500" />
                  ) : (
                    <XCircle className="inline text-red-500" />
                  )}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded"
          >
            <p className="font-semibold text-blue-800">Explanation:</p>
            <p className="text-blue-700 mt-1 text-sm">{currentQuestion.explanation}</p>
          </motion.div>
        )}

        {/* Next Button */}
        {showExplanation && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
            >
              {currentIndex === quiz.questions.length - 1 ? "Finish" : "Next Question →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;