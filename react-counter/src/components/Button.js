import React from "react";

const Button = ({ increment, onClickFunction, sign }) => {
  const handleClick = () => {
    onClickFunction(increment, sign);
  };

  return (
    <button onClick={handleClick}>
      {sign}
      {increment}
    </button>
  );
};

const ResetButton = ({ countreset, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(countreset);
  };

  return <button onClick={handleClick}> Reset </button>;
};

const SaveCounterButton = ({ count, countList, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(count, countList);
  };

  // append a list in python
  return <button onClick={handleClick}> Save </button>;
};

function CountListTracker({ counter }) {
  return <li>{counter}</li>;
}

export { Button, ResetButton, SaveCounterButton, CountListTracker };
