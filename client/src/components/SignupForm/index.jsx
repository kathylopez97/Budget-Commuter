// Import useState from react
import { useState } from 'react';
// BootStrap styling
import { Form, Button, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
// Import apollo and mutations from ADD USER
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
// Import auth
import Auth from '../../utils/auth';
// This functon created Signup form
const SignupForm = () => {
    const [addUser] = useMutation(ADD_USER);

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            
            //error starts here
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data)
            
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setFormState({
            username:' ',
            email: '',
            password: '',
        });
    };
// returns functions of import signup form for users to create an account
    return (
        <>
            {/* This is needed for the validation functionality above */}
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                {/* show alert if server response is bad */}
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                    Something went wrong with your signup!
                </Alert>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='username'>Username</Form.Label>
                    <FaUser className='icon' />
                    <Form.Control
                        type='text'
                        placeholder='Your username'
                        name='username'
                        onChange={handleInputChange}
                        value={formState.username}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <FaEnvelope className='icon' />
                    <Form.Control
                        type='email'
                        placeholder='Your email address'
                        name='email'
                        onChange={handleInputChange}
                        value={formState.email}
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
                        value={formState.password}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                </Form.Group>
                <Button
                    disabled={!(formState.username && formState.email && formState.password)}
                    type='submit'
                    variant='success'>
                    Submit
                </Button>
            </Form>
        </>
    );
};
// export Signupform

export default SignupForm;