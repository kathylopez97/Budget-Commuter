// Import useState, call Auth and Mutations from React
// Import css styling and react icon with Bootstrap
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import './Loginform.css'
// This function creates a login form for user to login or create an account
const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [loginUserMutation] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      try {
        const { data } = await loginUserMutation({ variables: { ...userFormData } });
        const { token } = data.loginUser;
        Auth.login(token);
      } catch (err) {
        console.error(err);
        setShowAlert(true);
      }
      setUserFormData({ email: '', password: '' });
    }
  };
// return login form 
  
  return (
    <>
    
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your login credentials!
        </Alert>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <FaEnvelope className='icon' />
          <Form.Control
            type='text'
            placeholder='Your email'
            name='email'
            className="form-control rounded-0"
            onChange={handleInputChange}
            value={userFormData.email}
            required
            
          />
          
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <FaLock className='icon' />
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            className="form-control rounded-0"
            value={userFormData.password}
            required 
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};
// Export Loginform

export default LoginForm;

