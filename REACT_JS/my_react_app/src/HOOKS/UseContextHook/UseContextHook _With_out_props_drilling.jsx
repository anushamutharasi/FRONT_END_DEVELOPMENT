import React, { createContext, useContext } from "react";

//create the context

const nameContext = createContext();

const ChildComponet1 = () => {
  return (
    <div>
      <h2>i am ch1</h2>
      <ChildComponet2 />
    </div>
  );
};
const ChildComponet2 = () => {
  return (
    <div>
      <h2>i am ch2</h2>
      <ChildComponet3 />
    </div>
  );
};

const ChildComponet3 = () => {
  const name_value = useContext(nameContext);
  console.log("nameContext",nameContext);
  

  return (
    <div>
      <h2>i am ch3{name_value}</h2>
    </div>
  );
};

//parent component
const UseContextHook_With_out_props_drilling = () => {
  const name = "CONTEXT OBJECT WITHOUT PROP DRILLING";
  return (
    // provide the context object with value prop
    <>
      <div>UseContextHook _With_out_props_drilling</div>
      <nameContext.Provider value={name}>
        <ChildComponet1 />
      </nameContext.Provider>
    </>
  );
};

export default UseContextHook_With_out_props_drilling;
