import { useState } from "react";

const Quiz = () => {
    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
    
  return <p>Currently active Question</p>;
};

export default Quiz;
