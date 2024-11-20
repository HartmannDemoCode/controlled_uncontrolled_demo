import React, { useState } from "react";

const PersonForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    gender: "",
    licensed: false,
    level: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // change checkbox 'on' value to boolean
    formJson.licensed = formJson.licensed === "on";
    console.log("FORM JSON: ", formJson);

    setPerson((prevPerson) => {
      return { ...prevPerson, ...formJson }; //
    });
  }

  return (
    <>
      <div style={{border: "1px solid orange", padding: "10px", margin: "10px"}}>
        {person.name && <h3>Name: {person.name}</h3>}
        {person.age && <p>Age: {person.age}</p>}
        {person.licensed && <p>Licensed: {person.licensed ? "Is licensed" : "Is not licensed"}</p>}
        {person.gender && <p>Gender: {person.gender}</p>}
        {person.level && <p>Level: {person.level}</p>}
      </div>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Enter name: <input name="name" placeholder="Enter your name" />
        </label>
        <hr />
        <label>
          Enter age:{" "}
          <input type="number" name="age" placeholder="Enter your age" />
        </label>
        <hr />
        <label>
          Licensed?{" "}
          <input type="checkbox" name="licensed" defaultChecked={false} />
        </label>
        <hr />
        <p>
          Select gender:
          <br />
          <label>
            <input type="radio" name="gender" value="Male" />
            Male
          </label>
          <br />
          <label>
            <input type="radio" name="gender" value="Female" />
            Female
          </label>
          <br />
          <label>
            <input type="radio" name="gender" value="Other" />
            Other
          </label>
          <br />
          <label>
          Enter Level:{" "}
            <select name="level">
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
            </select>
          </label>
          <br />
        </p>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    </>
  );
};
export default PersonForm;
