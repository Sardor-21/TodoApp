import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from '../components/Todo/Todo';

const todos = [
  {
    title: "task 1",
    status: false,
  },
  {
    title: "task 2",
    status: false,
  },
  {
    title: "task 3",
    status: false,
  },
]

function App() {
  return (
    <div className="App">
      <Todo todos={todos} />
    </div>
  );
}

export default App;
