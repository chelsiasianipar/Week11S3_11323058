import React from 'react';
import './App.css';
import Button from './button';
import LoginForm from './login'; // Mengimpor LoginForm dari file login.js

function buttonClick() {
  console.log("Button is clicked");
  alert("Button is clicked");
}

function handleSubmit() {
  console.log('You clicked submit.');
}

function App() {
  return (
    <div className="App">
      <h1>React Event Handling</h1>
      <br /><hr />
      <Button onClick={buttonClick} />
      <LoginForm onSubmit={handleSubmit} /> {/* Menggunakan LoginForm sebagai komponen */}
    </div>
  );
}

export default App;
