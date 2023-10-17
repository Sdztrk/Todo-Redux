import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App bg-blue-950 w-full h-[100vh]">
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
