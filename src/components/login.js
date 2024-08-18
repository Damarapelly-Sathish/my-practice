import React,{useState} from 'react';
import './Login.css';
import Modal from './Modal';
import CreateAccount from './CreateAccount'
import {useDispatch} from 'react-redux';
import {PostLoginData} from './actionforcart';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const PostLogin=(e)=>{
      e.preventDefault();
      setShowModal(false);
      navigate('/');
      dispatch(PostLoginData(formData));
    }
  
  
  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form" onSubmit={PostLogin}>
        <label className="login-label" htmlFor="email">Email</label>
        <input className="login-input" type="email" id="email" name="email" value={formData.email} 
          onChange={handleChange} required />
        
        <label className="login-label" htmlFor="password">Password</label>
        <input className="login-input" type="password" id="password" name="password" value={formData.password} 
          onChange={handleChange} required />
        
        <button  className="login-button" type="submit">SIGN IN </button>
      </form>
      <div className="login-footer">
        <a href="/forgot-password" className="login-link">Forgot your password?</a>
        <span className="login-separator"> / </span>
        <a className="login-link" onClick={toggleModal}>Create account</a>
        <Modal show={showModal} onClose={toggleModal}>
          <CreateAccount />
          </Modal>
      </div>
    </div>
  );
};

export default Login;
