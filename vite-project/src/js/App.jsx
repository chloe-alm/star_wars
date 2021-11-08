import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "../css/app.css";

//acces a ces differentes valeurs grace aux hook et useDisache permet d appelle une action
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counterSlice";
import { Header } from "./components/Header";
import { setName, clearName } from "./store/settings";

function App() {
  // const [count, setCount] = useState(0);
  // une fonction qui prend en valeur la value
  const count = useSelector((state) => state.counter.value);
  //pouvoir utiliser les fonctions
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => dispatch(increment())}>increment</button>
          <button onClick={() => dispatch(decrement())}>decrement</button>
        </p>
        <p>
          <strong>{count}</strong>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <button onClick={() => dispatch(setName("redux toolkit is cool"))}>
          change app name
        </button>
        <button onClick={() => dispatch(clearName(""))}>clear app name</button>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
