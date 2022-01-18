import logo from "./logo.svg";
import "./App.css";
import { Header } from "./stories/Header";
import { Button } from "./stories/Button";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div style={{ margin: 12 }}></div>
      <Button
        label={"This is my button"}
        size={"large"}
        backgroundColor={"white"}
        onClick={handleButtonClick}
      ></Button>
    </div>
  );
}

const handleButtonClick = () => {
  console.log("Someone clicked the button");
};

export default App;
