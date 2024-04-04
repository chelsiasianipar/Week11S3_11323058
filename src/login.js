import React from 'react';
import LoginForm from './login';

function handleLogin(username, password) {
  // Lakukan logika autentikasi atau pengiriman data login ke server
  console.log("Username:", username);
  console.log("Password:", password);
}

function App() {
  return (
    <div>
      {/* Meneruskan prop onLogin sebagai sebuah fungsi */}
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
