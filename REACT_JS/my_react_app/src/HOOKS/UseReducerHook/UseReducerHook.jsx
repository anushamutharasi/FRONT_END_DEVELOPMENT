import { useReducer } from "react";
import React from "react";

const reducer = (state, action) => {
  console.log("STATE IN REDUCER FUNCTION", state);
  if (action.type === "INCREMENT") {
    return (state = state + 1);
  }
  if (action.type === "DECREMENT") {
    return (state = state - 1);
  }
  if (action.type === "RESET") {
    return (state = 0);
  }

  return state;
};

const UseReducerHook = () => {
  const count = 0;
  const [state, dispatch] = useReducer(reducer, count);
  console.log(state);

  const Increment = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const Decrement = () => {
    dispatch({
      type: "DECREMENT",
    });
  };
  const Reset = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <>
      <div>UseReducerHook-</div>
      <h1>COUNT:{state}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default UseReducerHook;
