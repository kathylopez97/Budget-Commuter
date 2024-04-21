import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ContactUs() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("CONTACT FORM SUBMITTED!")
        alert("Message Received!")
    }
    return (
        <>
            <h2>Contact Us</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="name" placeholder="Enter Full Name" />
                    {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>E-mail: </Form.Label>
                    <Form.Control type="email" placeholder="enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message: </Form.Label>
                    <Form.Control type="text" placeholder="Enter Text" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
                <Button onClick={handleSubmit} variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );

}



export default ContactUs;