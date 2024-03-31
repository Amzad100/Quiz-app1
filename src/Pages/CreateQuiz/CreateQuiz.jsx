import React, { useState } from 'react';

const CreateQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);

  const addQuestion = () => {
    const newQuestion = {
      question: currentQuestion,
      options: currentOptions.filter(option => option !== ''),
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion('');
    setCurrentOptions(['', '', '', '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentOptions];
    newOptions[index] = value;
    setCurrentOptions(newOptions);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Create Quiz</h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Question:</label>
        <input
          className="w-full p-2 border rounded-md"
          type="text"
          value={currentQuestion}
          onChange={(e) => setCurrentQuestion(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Options:</label>
        {currentOptions.map((option, index) => (
          <input
            key={index}
            className="w-full p-2 border rounded-md mb-2"
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        ))}
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={addQuestion}
      >
        Add Question
      </button>

      <div>
        <h3 className="text-xl font-bold mt-4">Current Questions:</h3>
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <p className="font-semibold">{q.question}</p>
            <ul>
              {q.options.map((opt, i) => (
                <li key={i} className="ml-4">{opt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateQuiz;
