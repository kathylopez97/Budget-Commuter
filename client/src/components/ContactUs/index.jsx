// BootStrap Styling
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// function for contact form for users to send feedback
function ContactUs() {
// handlesubmit function once user submits informations
    const handleSubmit = (event) => {
        event.preventDefault();
        // returns an alert when submitted
        console.log("CONTACT FORM SUBMITTED!")
        alert("Message Received!")
    }
    // return function contact form
    return (
        <>
           
            <Form>
            <h1>
                Contact Us
            </h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="name" placeholder="Enter Full Name" />
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>E-mail: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message: </Form.Label>
                    <Form.Control type="text" placeholder="Enter Text" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );

}


// export Contact Us
export default ContactUs;