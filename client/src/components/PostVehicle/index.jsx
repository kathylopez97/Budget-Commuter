import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Button, Alert } from 'react-bootstrap';
import { POST_VEHICLE } from '../../utils/mutations';
import Auth from '../../utils/auth';
const VehiclePost = ({ vehicle }) => {
    const [postVehicle] = useMutation(POST_VEHICLE);
    const [validated, setValidated] = useState(false);
    const [userFormData, setUserFormData] = useState({
        make: '',
        model: '',
        year: '',
        color: '',
        miles: '',
        price: ''
    });

    const handleInputChange = (event) => {
        const{name, value} = event.target;
        setUserFormData({...userFormData, [name]: value});
    };

    const handleFormSubmnit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if(form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        try {
            const token = Auth.getToken(); // Assuming Auth.getToken() retrieves the token from local storage or wherever it's stored
            await postVehicle({ 
                variables: { ...userFormData },
                context: {
                    headers: {
                        Authorization: token ? `Bearer ${token}` : ''
                    }
                }
            });
            
            setUserFormData({
                make: '',
                model: '',
                year: '',
                color: '',
                miles: '',
                price: ''
            });
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Form noValidate validated={validated} onSubmit={handleFormSubmnit}>
        <Form.Group className='mb-3'>
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
            <Button type='submit' variant='success'>Post Vehicle</Button>
        </Form.Group>
        </Form>
    );
};

export default VehiclePost;
