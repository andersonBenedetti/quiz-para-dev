import styles from './Options.module.css';

import {useContext} from 'react';
import {QuizContext} from '../context/quiz';

export default function Options({option}) {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className={styles.options}>
      <p>{option}</p>
    </div>
  );
}
