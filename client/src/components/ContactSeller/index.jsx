import React from "react";
import Auth from "../../utils/auth";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



    // When logged in you can contact seller //
 
function contactSeller(){
    const checkValidation = () => {
        if (!Auth.loggedIn()) {
            window.location.assign("/login");
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // returns an alert when submitted
        console.log("CONTACT SELLER FORM SUBMITTED!")
        alert("Message Send to Contact Seller!")
    }

    return(
        <>
  
           <Form>
           <h1>
               Contact Seller
           </h1>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                   <Form.Label>Name: </Form.Label>
                   <Form.Control type="name" placeholder="Enter Full Name" />
               
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicPassword">
                   <Form.Label>Message: </Form.Label>
                   <Form.Control type="text" placeholder="Is this vehicle available?" />
               </Form.Group>
               <Button onClick={handleSubmit} variant="secondary" type="submit">
                   Submit
               </Button>
           </Form>
       </>
   );

}
//This is the layout for model and contact Seller. Taken from homepage with Post vehicle
//This is an example. Don't forget state

{/* <Button variant="secondary" size="lg" onClick={() => setPostVehicle(true)}>
Post Vehicle
</Button>
<Modal show={postVehicle} onHide={() => setPostVehicle(false)}>
<PostVehicle />
</Modal> */}

export default contactSeller;