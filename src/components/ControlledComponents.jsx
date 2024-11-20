import React, {useState} from "react";

function ControlledForm() {
  const initialFormState = {
    myInput: '',
    myCheckbox: false,
    myRadio: '',
  }
  const [formData, setFormData] = useState(initialFormState);

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
  }

  function handleChange(evt) {
    const { name, value, type, checked } = evt.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" value={formData.myInput} onChange={handleChange} />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" value={formData} onChange={handleChange}/>
      </label>
      <hr />
      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" checked={formData.myRadio === 'option1'}
            onChange={handleChange}/> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2" checked={formData.myRadio === 'option2'}
            onChange={handleChange}/> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" checked={formData.myRadio === 'option3'}
            onChange={handleChange}/> Option 3</label>
      </p>
      <hr />
      <button onClick={()=>setFormData(initialFormState)}>Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}

export default ControlledForm;