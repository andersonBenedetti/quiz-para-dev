import styles from './Welcome.module.css';
import Quiz from '../assets/quiz.svg';

export default function Welcome() {
  return (
    <div className={styles}>
      <h2>Seja Bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
}
