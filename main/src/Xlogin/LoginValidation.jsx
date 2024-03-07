import React, { useState } from 'react';
import styles from "./LoginValidation.module.css"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '' || password === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    if (username === 'user' && password === 'password') {
      setErrorMessage('Welcome, user!');
      // Here you would handle successful login, like redirecting to another page
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <>
    <div className={styles.entire}>
        <div><h1>Login Page</h1></div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {errorMessage && <p className={styles.para}>{errorMessage}</p>}
      </form>
    </div>
    </>
  );
};

export default LoginPage;
