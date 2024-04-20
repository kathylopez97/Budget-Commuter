import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert, Modal } from 'react-bootstrap';
import { POST_VEHICLE } from '../../utils/mutations';

import Auth from '../../utils/auth';
const VehiclePost = () => {
    const [postVehicle] = useMutation(POST_VEHICLE);
    const [validated, setValidated] = useState(false);
    const [userFormData, setUserFormData] = useState({
        user: '',
        color: '',
        make: '',
        miles: 0,
        model: '',
        price: 0,
        year: 0
    });

    useEffect(() => {
        const user = Auth.getProfile()?.data?._id;

        if (user) {
            setUserFormData({ ...userFormData, user });
        } else {
            console.log('Error in Authentication');
        }
    }, []);


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
            return;
        }
        try {
            // Log userFormData before submission

            console.log({
                ...userFormData,
                year: Number(userFormData.year),
                miles: parseInt(userFormData.miles),
                price: parseInt(userFormData.price),
                
            });
            // Submit the mutation with userFormData
            await postVehicle({
                variables: {vehicleData: {
                    ...userFormData,
                    year: parseInt(userFormData.year),
                    miles: parseInt(userFormData.miles),
                    price: parseInt(userFormData.price),
                }},
            });

            console.log('Did you make it here?');
            
            // Reset form validation
            setValidated(false);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Form.Group className='mb-3 p-4'>
                    {Auth.loggedIn() ? (
                        <>
                        <Modal.Header closeButton></Modal.Header>
                            <Form.Label htmlFor='make'>Make</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Make'
                                name='make'
                                value={userFormData.make}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Label htmlFor='model'>Model</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Model'
                                name='model'
                                value={userFormData.model}
                                onChange={handleInputChange}
                                required
                            />

                            <Form.Label htmlFor='year'>Year</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Year'
                                name='year'
                                value={userFormData.year}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Label htmlFor='color'>Color</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Color'
                                name='color'
                                value={userFormData.color}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Label htmlFor='miles'>Miles</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Miles'
                                name='miles'
                                value={userFormData.miles}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Label htmlFor='price'>Price</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Price'
                                name='price'
                                value={userFormData.price}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Please fill out all fields</Form.Control.Feedback>
                            <Button className="mt-4" type='submit' variant='success'>Post Vehicle</Button>
                        </>
                    ) : (
                        <Alert variant='warning'>You must be logged in to post a vehicle!</Alert>
                    )}
                </Form.Group>
            </Form>
        </>
    );
};

export default VehiclePost;
