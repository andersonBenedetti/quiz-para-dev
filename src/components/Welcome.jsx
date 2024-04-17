import styles from './Welcome.module.css';

import Quiz from '../assets/quiz.svg';

import {useContext} from 'react';
import {QuizContext} from '../context/quiz';

export default function Welcome() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={styles.welcome}>
      <h2>Seja Bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
}
