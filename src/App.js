import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <div className="row">
          <h1>Dictionary Project</h1>
        </div>
      </header>

      <main>
        <Dictionary defaultKeyword="rainbow" />
      </main>
      <footer>
        <small className="text-center">
          Dictionary App is Coded by Saba Rahrotaban and is{" "}
          <a href="https://github.com/sabarht/react-dictionary">Open Source.</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
