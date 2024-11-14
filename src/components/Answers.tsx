import { useRef } from "react";

interface AnswersProp {
  answers: string[];
  selectedAnswer: string | null;
  answerState: string;
  activeQuestionIndex: number;
  userAnswers: (string | null)[];
  onSelect: (text: string) => void;
}

const Answers = ({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
  activeQuestionIndex,
  userAnswers,
}: AnswersProp) => {
  const shuffledAnswers = useRef<string[]>([]);

  if (
    shuffledAnswers.current.length === 0 ||
    activeQuestionIndex !== userAnswers.length - 1
  ) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";

        if (answerState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button onClick={() => onSelect(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
