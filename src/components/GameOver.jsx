import styles from './GameOver.module.css';

import Welldone from '../assets/welldone.svg';

import {useContext} from 'react';

import {QuizContext} from '../context/quiz';

export default function GameOver() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={styles.gameover}>
      <h2>Fim de jogo!!!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}
      </p>
      <img src={Welldone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({type: 'NEW_GAME'})}>Reiniciar</button>
    </div>
  );
}
