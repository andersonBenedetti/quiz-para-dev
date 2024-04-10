import Welcome from './components/Welcome';
import {useContext} from 'react';
import {QuizContext} from './context/quiz';

export default function App() {
  const quizState = useContext(QuizContext);
  console.log(quizState);

  return (
    <div>
      <h1>Quiz de Programação</h1>
      <Welcome />
    </div>
  );
}
