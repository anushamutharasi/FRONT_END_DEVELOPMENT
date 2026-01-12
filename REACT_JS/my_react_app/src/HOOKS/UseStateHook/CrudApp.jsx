import React, { useState } from "react";
/**
 *
 *data[{name:name,age:age,email},{name:name,age:age,email}]
 */
const CrudApp = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [data, setData] = useState([]);

  const NameHandler = (e) => {
    setName(e.target.value);
  };

  const AgeHandler = (e) => {
    setAge(e.target.value);
  };
  const EmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, age, email);
    //here successfully get the values from the form

    const newUser = { name, age, email };
    console.log(newUser);

    setData((prevdata) => [...prevdata, newUser]);
    console.log("DATA", data);
    //clearing the form values

    setName("");
    setAge("");
    setEmail("");
  };

  return (
    <>
      <div>CrudApp</div>
      <form onSubmit={SubmitHandler}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={NameHandler} />
        <br />
        <label htmlFor="">age</label>
        <input type="text" value={age} onChange={AgeHandler} />
        <br />
        <label htmlFor="">email</label>
        <input type="text" value={email} onChange={EmailHandler} />
        <button type="submit">Submit</button>
      </form>

      {/* displaying the values */}
      {data.length === 0 ? <h1>NO DATA FOUND</h1> : <DisplayingData data={data} />}
    </>
  );
};

const DisplayingData = ({data}) => {
    console.log(data);
    
  return (
<>

<h1>Displaying data</h1>

{
    data?.map((eachUser,i)=>(
        <div>
            <h2 key={i}>{eachUser.name}</h2>
            <h3>{eachUser.age}</h3>
            <h3>{eachUser.email}</h3>


        </div>



    ))


}
</>






  )
};
export default CrudApp;
