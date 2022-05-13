/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthContex from '../contex/AuthContex';

const Inscription = () => {
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');
  const navigate = useNavigate();
  const { dispatchAPI } = useAuthContex();
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      mdp
    };
    await dispatchAPI('inscription', data);
    navigate('/connexion');
  };

  return (
    <div>
      <h1>Inscription </h1>

      <form action="">
        <label>Pseudo: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <br />

        <label>mot de passe : </label>
        <input
          type="password"
          id="mdp"
          value={mdp}
          onChange={(e) => setMdp(e.target.value)}
        />
        <br />

        <br />
        <button className="btn btn-success start" onClick={onSubmit}>
          {' '}
          Enregistrer
        </button>
      </form>
    </div>
  );
};
export default Inscription;
