import React, { useState } from 'react';

const JoinQuiz = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const handleJoin = () => {
    // Handle joining the quiz with name and code
    console.log('Joining quiz:', name, code);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Join Quiz</h1>
      <div className="w-72">
        <input
          className="w-full p-2 mb-4 border rounded-md"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-2 mb-4 border rounded-md"
          type="text"
          placeholder="Quiz Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleJoin}
        >
          Join Quiz
        </button>
      </div>
    </div>
  );
};

export default JoinQuiz;
