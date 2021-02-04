import logo from "./logo.svg";
import "./App.css";
import qoreContext from "./qoreContext.js";

function App() {
  const feedbacks = qoreContext.view("allFeedback").useListRow();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <pre>{JSON.stringify(feedbacks)}</pre>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
