import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Welcome modulename="Counter App" name="Bijon" />
      <Counter />
      <br />
      <Welcome modulename="ToDo app" name="Bijon" />
      <Todo />
    </div>
  );
}

export default App;
