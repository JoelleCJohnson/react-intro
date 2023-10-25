import './App.css';
import DateComponent from './component/DateComponent'
import ChildComponent from './component/GrandChild'

function App() {
  //JSX only lives in return
  return (
    <div className="App">
      <header className="App-header">
        <ChildComponent />
        <DateComponent />
      </header>
    </div>
  );
}

export default App;
