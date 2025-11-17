import logo from './logo.svg';
import './App.css';
import Welcome from  './components/welcome.js';
import Counter from './components/counter.js';
function App() {
  return (
    <div className="App">
     <Welcome name="Bijon"/>
     <Counter/>
    </div>
  );
}

export default App;
