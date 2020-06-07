import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Button,
  ResetButton,
  SaveCounterButton,
  CountListTracker,
} from "./components/Button";

import "./styles.css";

function Headline() {
  const greeting = "My functional counter component!";
  return <h1>{greeting}</h1>;
}

function App() {
  const [count, setCount] = useState(0);

  const [countList, setCountList] = useState([]);

  const adjustCount = (increment, sign) => {
    if (sign === "+") {
      console.log("Increment");
      setCount(count + increment);
    } else {
      console.log("Decrement");
      setCount(count - increment);
    }
  };

  const resetCount = (countreset) => {
    setCount(countreset);
  };

  const updateCountList = (count, countList) => {
    setCountList(countList.concat(count));
  };

  return (
    <div className="App">
      <Headline />
      <div className="Row">
        <p>Current counter is displayed below</p>
        <span>{count}</span>
      </div>
      <div className="Row">
        <p>List of saved counts is saved below</p>
        <ul>
          {countList.map(function (counter, index) {
            return <CountListTracker key={index} counter={counter} />;
          })}
        </ul>
      </div>

      <Button increment={1} onClickFunction={adjustCount} sign={"+"} />
      <Button increment={10} onClickFunction={adjustCount} sign={"+"} />
      <Button increment={100} onClickFunction={adjustCount} sign={"+"} />
      <Button increment={1000} onClickFunction={adjustCount} sign={"+"} />
      <Button increment={100} onClickFunction={adjustCount} sign={"-"} />
      <ResetButton countreset={0} onClickFunction={resetCount} />
      <SaveCounterButton
        count={count}
        countList={countList}
        onClickFunction={updateCountList}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
