import React from "react";
import Auth from "../../utils/auth";
import { Form } from "react-bootstrap";


    // When logged in you can contact seller //
 
function contactSeller(){
    const checkValidation = () => {
        if (!Auth.loggedIn()) {
            window.location.assign("/login");
        }
    }

    return(
        <>

        <div>
            <button onClick={checkValidation}>Contact Seller</button>
        </div>

        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="email" required/>

                <Form.Label htmlFor="make">Message</Form.Label>
                <Form.Control name="make" as="textarea" rows={3} required/>
            </Form.Group>
        </Form>
        </>
    )
}

//This is the layout for model and contact Seller. Taken from homepage with Post vehicle
//This is an example. Don't forget state

// <Button variant="secondary" size="lg" onClick={() => setPostVehicle(true)}>
// Post Vehicle
// </Button>
// <Modal show={postVehicle} onHide={() => setPostVehicle(false)}>
// <PostVehicle />
// </Modal>

export default contactSeller;