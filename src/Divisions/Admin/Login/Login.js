import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { LOGIN_MUTATION } from '../../../Utilis/queries_and_mutations';
import './login.css';
import { CURRENT_USER_COOKIE_NAME } from '../../../Utilis/data';

const Login = () => {
  const [userEmailOrTel, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookies] = useCookies([CURRENT_USER_COOKIE_NAME]);


  const [loginApiCall] = useMutation(LOGIN_MUTATION, {
    variables: {
        userEmailOrTel: userEmailOrTel,
        password: password
    }, onCompleted: (response) => {
        setCookies(CURRENT_USER_COOKIE_NAME, response['login'], { path: '/', secure: false });
    }, onError: (error) => {
        alert(error);
    }
});

  const handleSubmit = (e) => {
    e.preventDefault();
    loginApiCall();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Day To Day Safaris Admin Login</h2>
        <input
          type="text"
          placeholder="Email of Tel"
          value={userEmailOrTel}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;
