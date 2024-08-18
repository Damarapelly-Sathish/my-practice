import React from 'react';
import './CreateAccount.css';
import {PostUserData} from './actionforcart';
import {useState} from 'react';
import { useSelector, useDispatch,} from 'react-redux';

const CreateAccount = () => {
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName:'',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createAPIForSignup=(e)=>{
    e.preventDefault();
    dispatch(PostUserData(formData));
  }
  return (
    <div className="create-account-container">
      <h1 className="create-account-heading">Create Account</h1>
      <form className="create-account-form" onSubmit={createAPIForSignup}>
        <label className="create-account-label" htmlFor="firstName">First Name</label>
        <input className="create-account-input" type="text" id="firstName" name="firstName" value={formData.firstName} 
          onChange={handleChange} required />

        <label className="create-account-label" htmlFor="lastName">Last Name</label>
        <input className="create-account-input" type="text" id="lastName" name="lastName" value={formData.lastName} 
          onChange={handleChange} required />

        <label className="create-account-label" htmlFor="userName">User Name</label>
        <input className="create-account-input" type="text" id="userName" name="userName" value={formData.userName} 
          onChange={handleChange}required />

        <label className="create-account-label" htmlFor="email">Email</label>
        <input className="create-account-input" type="email" id="email" name="email" value={formData.email} 
          onChange={handleChange} required />

        <label className="create-account-label" htmlFor="password">Password</label>
        <input className="create-account-input" type="password" id="password" name="password" value={formData.password} 
          onChange={handleChange} required />

        <button className="create-account-button" type="submit" >CREATE</button>
      </form>
    </div>
  );
};

export default CreateAccount;
