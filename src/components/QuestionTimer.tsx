import { useEffect, useState } from "react";

interface QuestionTimerProps {
  timeout: number;
  onTimeout: () => void;
}

const QuestionTimer = ({ timeout, onTimeout }: QuestionTimerProps) => {
  const [remainingTime, setRemainingTime] = useState<number>(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(() => {
      onTimeout();
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevState) => prevState - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={remainingTime} />;
};

export default QuestionTimer;
