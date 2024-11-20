/* eslint-disable react/prop-types */
import { useState } from 'react';
import PersonForm from './components/PersonForm'
import UnControlledForm from './components/UnControlledComponents'
import ControlledForm from './components/ControlledComponents'


const App = () => {

  return (
    <div>
      <h3>UnControlled Form</h3>
      <UnControlledForm />
      <h3>Controlled Form</h3>
      <ControlledForm />
      <h3>UnControlled Person Form</h3>
      <PersonForm/>
    </div>
  );
};
export default App;


