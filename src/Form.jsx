import React, { useState } from "react";
export default function App2() {
  const [count, setCoint] = useState(0);
  const [click, setClick] = useState(false);
  const [number, setNumber] = useState(" ");
  const [click1, setClick1] = useState(false);
  function Random() {
    var k = Math.floor(Math.random() * 3) + 1;
    console.log(k);
    setCoint(k);
  }
  function Pick(event) {
    var k = event.target.value;
    setNumber(k);
  }
  function check() {
    if (number == count) {
      console.log("correct");
      setClick1(true);
    }
    if (number != count) {
      setClick1(false);
    }
  }
  return (
    <div className="App2">
      <button onClick={Random}> Enter</button>
      <h1>{count}</h1>
      <input
        onChange={Pick}
        type="text"
        value={number}
        placeholder="enter your number"
      />
      <button onClick={check}>Check</button>
    </div>
  );
}
