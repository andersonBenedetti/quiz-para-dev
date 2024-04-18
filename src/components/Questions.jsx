import styles from './Questions.module.css';

import {useContext} from 'react';
import {QuizContext} from '../context/quiz';

import Options from './Options';

export default function Questions() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestions = quizState.questions[quizState.currentQuestions];

  const OnSelectOption = (option) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: {answer: currentQuestions.answer, option},
    });
  };

  return (
    <div className={styles.question}>
      <p>
        Pergunta {quizState.currentQuestions + 1} de
        {quizState.questions.length}
      </p>
      <h2>{currentQuestions.question}</h2>
      <div>
        {currentQuestions.options.map((option) => (
          <Options
            option={option}
            key={option}
            answer={currentQuestions.answer}
            selectOption={() => OnSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>
          Continuar
        </button>
      )}
    </div>
  );
}
