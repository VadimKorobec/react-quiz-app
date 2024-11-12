import { useState } from "react";

import QUESTIONS from "../questions";

interface Question {
  id: string;
  text: string;
  answers: string[];
}

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = (selectedAnswer: string) => {
    setUserAnswers((prevState) => [...prevState, selectedAnswer]);
    };
    
    if (userAnswers.length === 7) {
        return <p>You win</p>
    }

    return (
      <div id="quiz">
        <div id="question">
          <p>{QUESTIONS[activeQuestionIndex].text}</p>
          <ul id="answers">
            {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
};

export default Quiz;
