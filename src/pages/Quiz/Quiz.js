import React, {useState} from 'react';
import './Quiz.scss';

export function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Which Rick is the real Rick?",
      options: [
        { id: 0, text: "Sanchez", isCorrect: false },
        { id: 1, text: "Morty", isCorrect: false },
        { id: 2, text: "C-137", isCorrect: false },
        { id: 3, text: "Creator of the portal gun", isCorrect: true },
      ],
    },
    {
      text: "What does wubba lubba dub dub mean?",
      options: [
        { id: 0, text: "Nothing matters", isCorrect: false },
        { id: 1, text: "You shall not pass", isCorrect: false },
        { id: 2, text: "I'm in pain, help me", isCorrect: true },
        { id: 3, text: "Means be cool", isCorrect: false },
      ],
    },
    {
      text: "What's the name of Morte and Summer's baby?",
      options: [
        { id: 0, text: "Vegeta", isCorrect: false },
        { id: 1, text: "Tsubasa", isCorrect: false },
        { id: 2, text: "Naruto", isCorrect: true },
        { id: 3, text: "Goku", isCorrect: false },
      ],
    },
    {
      text: "Who is every Rick?",
      options: [
        { id: 0, text: "Normal scientist", isCorrect: false },
        { id: 1, text: "Drunken mad scientist", isCorrect: true },
        { id: 2, text: "Honored scientist", isCorrect: false },
        { id: 3, text: "A problematic scientist", isCorrect: false },
      ],
    },
    {
      text: "Who was Morty crazy about the most?",
      options: [
        { id: 0, text: "Summer", isCorrect: false },
        { id: 1, text: "Jessica", isCorrect: true },
        { id: 2, text: "Monica", isCorrect: false },
        { id: 3, text: "Elisabet", isCorrect: false },
      ],
    },
    {
      text: "Who does nobody want to be?",
      options: [
        { id: 0, text: "Tammy", isCorrect: false },
        { id: 1, text: "Jerry", isCorrect: true },
        { id: 2, text: "Beth", isCorrect: false },
        { id: 3, text: "Mr Poopybutt", isCorrect: false },
      ],
    },
    {
      text: "Who is Rick's best friend?",
      options: [
        { id: 0, text: "Birdperson", isCorrect: true },
        { id: 1, text: "Squanchy", isCorrect: false },
        { id: 2, text: "Tammy", isCorrect: false },
        { id: 3, text: "Sleepy Gary", isCorrect: false },
      ],
    },
    {
      text: "What did bad Morty do?",
      options: [
        { id: 0, text: "He killed a morty", isCorrect: false },
        { id: 1, text: "He ran away from the Ricks", isCorrect: true },
        { id: 2, text: "He decided to change", isCorrect: false },
        { id: 3, text: "He died because of Rick", isCorrect: false },
      ],
    },
    {
      text: "Who was the Rick Citadel built for?",
      options: [
        { id: 0, text: "Rick", isCorrect: false },
        { id: 1, text: "Morty", isCorrect: false },
        { id: 2, text: "Rick and Morty", isCorrect: true },
        { id: 3, text: "Rick quick fuse", isCorrect: false },
      ],
    },
    {
      text: "Why did Rick and Morty have to change spacetime?",
      options: [
        { id: 0, text: "Because Rick is a sick scientist", isCorrect: false },
        { id: 1, text: "Because they spoiled the present reality", isCorrect: true },
        { id: 2, text: "Because Morty wanted to pass", isCorrect: true },
        { id: 3, text: "Because Rick loves to break everything", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1 className="rickH1">Rick and Morty Quiz</h1> 

      {/* 2. Current Score  */}
      <h2 className="score">Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2 className='questionOf'>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2 className="questionOut">
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li className="hoverUl"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div>
      <img className="dancingRickQuiz" src="https://media.tenor.com/H2mK_NOHBh8AAAAi/rick-and.gif" width="350px"  />
    </div>
    </div>
  );
}

export default Quiz