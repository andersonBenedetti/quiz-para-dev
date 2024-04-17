import style from './GameOver.module.css';

import Welldone from '../assets/welldone.svg';

import {useContext} from 'react';

import {QuizContext} from '../context/quiz';

export default function GameOver() {
  return (
    <div className={style.gameover}>
      <h2>Fim de jogo!!!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y</p>
      <img src={Welldone} alt="Fim do Quiz" />
      <button>Reiniciar</button>
    </div>
  );
}
