import React, { useState } from "react";

const PersonForm = () => {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
    gender: "",
    licensed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // change checkbox 'on' value to boolean
    formJson.licensed = formJson.licensed === "on";

    setPerson((prevPerson) => {
        return { ...prevPerson, ...formJson }; //
    });

  }

  return (
    <>
      <h3>{person.name}</h3>
        <p>{person.age}</p>
        <p>{person.licensed?'Is licensed':'Is not licensed'}</p>
        <p>{person.gender}</p>
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
        </p>
        <hr />
        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
    </>
  );
};
export default PersonForm;
