import "./App.css";
import Rect from "./Rect";

function App() {
  console.log("APP DIV Maker created by arturowsky, Feb `21.");
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <Rect />
        </div>
      </div>
    </div>
  );
}

export default App;
