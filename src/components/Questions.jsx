import styles from './Questions.module.css';
import {useContext} from 'react';
import {QuizContext} from '../context/quiz';

export default function Questions() {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestions = quizState.questions[quizState.currentQuestions];

  return (
    <div className={styles}>
      <p>
        Pergunta {quizState.currentQuestions + 1} de
        {quizState.questions.length}
      </p>
      <h2>{currentQuestions.question}</h2>
      <div>
        <p>Opções</p>
      </div>
      <button>Continuar</button>
    </div>
  );
}
