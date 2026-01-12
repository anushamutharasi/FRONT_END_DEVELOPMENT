import React ,{useRef}from 'react'

const UseRefHook = () => {
      const inputRef = useRef(null); // Step 1: create a reference

      const focusInput = () => {
        inputRef.current.focus(); // Step 3: access DOM element and focus
      };
  return (
    <>
      <div>
        <h2>useRef Example</h2>
        {/* Step 2: attach ref to the input */}
        <input ref={inputRef} type="text" placeholder="Type here..." />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </>
  );
}

export default UseRefHook