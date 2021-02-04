import React, { useState } from  'react';
import './App.css';
import Form from './components/Form';
import Result from './components/Result.js';


function App() {
  const [state , setState] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  });
  return (
    <div className="App">
      <Form inputs = {state} setInputs = {setState} />
      <Result data = {state} />
    </div>
  );
}

export default App;