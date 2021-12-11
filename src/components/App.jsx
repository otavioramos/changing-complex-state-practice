import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    console.log(contact);
    const {name:targetName, value:targetValue} = event.target;


    setContact((prev) => {
      if (targetName === "fName") {
        return {
          fName: targetValue,
          lName: prev.lName,
          email: prev.email
        }
      } else if (targetName === "lName") {
        return {
          fName: prev.fName,
          lName: targetValue,
          email: prev.email
        }
      } else if (targetName === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: targetValue
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={handleChange}
          value={contact.fName}/>
        <input 
          name="lName" 
          placeholder="Last Name" 
          onChange={handleChange}
          value={contact.lName}/>
        <input 
          name="email" 
          placeholder="Email" 
          onChange={handleChange}
          value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
