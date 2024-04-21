// Import React, Auth, Mutations and useSTATE & EFFECT
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import {DELETE_VEHICLE} from '../../utils/mutations';
import Auth from '../../utils/auth';

// This function creates data to remove vehicle created by user
// showcase vehicle form to delete data 
const DeletePost = () => {
    const [deleteVehicle] = useMutation(DELETE_VEHICLE);
    const [validated, setValidated] = useState(false);
    const [vehicleData, setVehicleData] = useState({
        _id: '', 
        make:'',
        model:'',
        year:0,
        color:'',
        miles:0,
        price:0   
    });
    
    useEffect(() => {
        const user = Auth.getProfile()?.data?._id;
        if (user) {
            setVehicleData({ ...vehicleData, user });
        } else {
            console.log('Error in Authentication');
        }
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setVehicleData({ ...vehicleData, [name]: value });
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
            await deleteVehicle({
                variables: { vehicleID: vehicleData._id },
            });
        } catch (error) {
            console.error('Error deleting vehicle:', error);
        }
    };
// Returns functions of Vehicle form
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Form.Group className='mb-3 p-4'>
                    {Auth.loggedIn() ? (
                        <>
                            <Form.Label htmlFor='make'>Make</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Make'
                                name='make'
                                value={vehicleData.make}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Label htmlFor='model'>Model</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Model'
                                name='model'
                                value={vehicleData.model}
                                onChange={handleInputChange}
                                required
                            />

                            <Form.Label htmlFor='year'>Year</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Year'
                                name='year'
                                value={vehicleData.year}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Label htmlFor='color'>Color</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Color'
                                name='color'
                                value={vehicleData.color}
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
                                value={vehicleData.price}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Please fill out all fields</Form.Control.Feedback>
                            <Button className="mt-4" type='submit' variant='danger'>Delete Vehicle</Button>
                            
                        </>
                    ) : (
                        <Alert variant='warning'>You are about to delete a vehicle</Alert>
                    )}
                </Form.Group>
            </Form>
        </>
    );
};
// export Delete Post

export default DeletePost;