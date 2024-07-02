import './Login.css';

import React from 'react';
import { useState } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('agora sim vc entendeu a essência', userEmail, userPass);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
            value={userEmail}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            name="senha"
            placeholder="Digite sua senha"
            onChange={(e) => {
              setUserPass(e.target.value);
            }}
            value={userPass}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" name="" id="" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
          <p>
            Não tenho uma conta?<a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
