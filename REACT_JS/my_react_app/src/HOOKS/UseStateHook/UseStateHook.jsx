import React, { useState } from "react";

const UseStateHook = () => {
  const [num, setNum] = useState(10);
  const [boolean, setBoolean] = useState(false);
  //Arrays

  const [array, setArray] = useState([2, 3, 4, 5]);
  //updating the array
  const Square = () => {
    setArray((prevArray) => prevArray.map((i) => i * i));
    setArray((prev) => [...prev, 200]);
  };
  //Objects
  const [userObject, setUserObject] = useState({ name: "anusha", age: 90 });
  const ObjectUpdate = () => {
    // for objects we have to use paranthesis to return the object other wise it assumes as block of code
    setUserObject((prev) => ({ ...prev, age: 26 }));
  };

  return (
    <>
      <h1>UseStateHook (With primitive data types)</h1>
      <h3 onMouseEnter={() => setNum((prev) => prev + 1)}>NUMBER:{num}</h3>
      <h3 onMouseOver={() => setBoolean(Number(!boolean))}>
        Boolean:{Number(boolean)}
      </h3>
      <h1>UseStateHook (With non - primitive data types)</h1>
      <h3>
        {array.map((item) => (
          <h2>ARRAY item:{item}</h2>
        ))}
      </h3>
      <button onClick={Square}>Square</button>

      <h2>{userObject.name}</h2>
      <h2>{userObject.age} </h2>

      <button onClick={ObjectUpdate}>Update</button>
    </>
  );
};

export default UseStateHook;
