import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getTodo = () => {
    fetch("https://heroku-json-test.herokuapp.com/api/todos")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  return (
    <div className="App">
      <button onClick={getTodo}>Get todo</button>
      <div>
        {data.map((item, i) => {
          return <div key={i}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
