import React, { useEffect, useState } from "react";

const UseEffecthook = () => {
  //these inputvale for live changes(logs while typing)
  const [inputvalue, setInputValue] = useState();
  //these submitvalue for final value after click on submit(logs only after submit)
  const [submitvalue, setSubmitValue] = useState();

  useEffect(() => {
    console.log("NAME", submitvalue);
  }, [submitvalue]);

  return (
    <>
      <div>UseEffecthook{submitvalue}</div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={() => setSubmitValue(inputvalue)}>Submit</button>
    </>
  );
};

export default UseEffecthook;
