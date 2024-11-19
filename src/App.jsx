/* eslint-disable react/prop-types */
import { useState } from 'react';

const App = () => {

  return (
    <div>
      <h3>UnControlled Form</h3>
      <UnControlledForm />
      <h3>Controlled Form</h3>
      <ControlledForm />
    </div>
  );
};
export default App;


function UnControlledForm() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    console.log("FORM DATA: ",formData);

    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log("FORMJSON: ",formJson);
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Text input: <input name="myInput" defaultValue="Some initial value" />
      </label>
      <hr />
      <label>
        Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <hr />
      <p>
        Radio buttons:
        <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
        <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
        <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
      </p>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
  );
}

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