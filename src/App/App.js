import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from '../components/Todo/Todo';

const todos = [
  {
    title: "Task 1",
    status: false,
  },
  {
    title: "Task 2",
    status: false,
  },
  {
    title: "Task 3",
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
