import React from "react";
//props drilling concept
const ChildComponet1 = (props) => {
  return (
    <div>
      <h2>i am ch1</h2>
      <ChildComponet2 data={props.data} />
    </div>
  );
};
const ChildComponet2 = (props) => {
  return (
    <div>
      <h2>i am ch2</h2>
      <ChildComponet3 data={props.data} />
    </div>
  );
};

const ChildComponet3 = (props) => {
  console.log(props);

  return (
    <div>
      <h2>i am ch3{props.data}</h2>
    </div>
  );
};
//parent Component
const UseContextHook = () => {
  const name = "REACT";

  return (
    <>
      <div>UseContextHook</div>
      <ChildComponet1 data={name} />
    </>
  );
};

export default UseContextHook;
