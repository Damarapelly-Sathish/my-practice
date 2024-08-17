import React,{useState} from 'react';
import './Login.css';
import Modal from './Modal';
import CreateAccount from './CreateAccount'

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form className="login-form">
        <label className="login-label" htmlFor="email">Email</label>
        <input className="login-input" type="email" id="email" name="email" required />
        
        <label className="login-label" htmlFor="password">Password</label>
        <input className="login-input" type="password" id="password" name="password" required />
        
        <button className="login-button" type="submit">SIGN IN</button>
      </form>
      <div className="login-footer">
        <a href="/forgot-password" className="login-link">Forgot your password?</a>
        <span className="login-separator"> / </span>
        <a href="/#" className="login-link" onClick={toggleModal}>Create account</a>
        <Modal show={showModal} onClose={toggleModal}>
          <CreateAccount />
          </Modal>
      </div>
    </div>
  );
};

export default Login;
