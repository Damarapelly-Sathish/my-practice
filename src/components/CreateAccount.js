import React from 'react';
import './CreateAccount.css';

const CreateAccount = () => {
  return (
    <div className="create-account-container">
      <h1 className="create-account-heading">Create Account</h1>
      <form className="create-account-form">
        <label className="create-account-label" htmlFor="firstName">First Name</label>
        <input className="create-account-input" type="text" id="firstName" name="firstName" required />

        <label className="create-account-label" htmlFor="lastName">Last Name</label>
        <input className="create-account-input" type="text" id="lastName" name="lastName" required />

        <label className="create-account-label" htmlFor="email">Email</label>
        <input className="create-account-input" type="email" id="email" name="email" required />

        <label className="create-account-label" htmlFor="password">Password</label>
        <input className="create-account-input" type="password" id="password" name="password" required />

        <button className="create-account-button" type="submit">CREATE</button>
      </form>
    </div>
  );
};

export default CreateAccount;
