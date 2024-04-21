// Import necessary components from react-bootstrap
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../ContactSeller";
import "./Homepage.css";
import Auth from "../../utils/auth";
import { Modal } from "react-bootstrap";
// Define a styles object for the LastSearched component
const styles = {
  LastSearchedStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    color: "white",
  },
};

// Define the LastSearched component
function LastSearched({ vehiclename, make, model, year, price, miles,color }) {
  // Render a Card component with the passed props
  return (
    <Card style={{ width: "18rem" }}>
      <Button variant="warning"
        onClick={() =>
          alert("Now Added to your Favorites!")
        }
      >
        
        Click me to save to your favorite section! 
      </Button>
      <Card.Img
        variant="top"
        src="https://di-uploads-pod14.dealerinspire.com/oaklawntoyota/uploads/2020/01/2020-Toyota-Camry-Ruby-Flare-Pearl.png"
      />

      <Card.Body>
        {/* Display the vehicle name as the card title */}
        <Card.Title>{vehiclename}</Card.Title>
        <Card.Text>
          {/* Display the make, model, year, and price as the card text */}
          Make: 'Toyota'{make} <br />
          Model: 'Camry' {model} <br />
          Year: '2020'{year} <br />
          Color: 'Red' {color}<br />
          Miles: '$1000'{miles} <br />
          Price: '$25000'{price} <br />
         
        </Card.Text>
        {/* Include a button on the card */}
        <Button variant="primary" href="/contactseller">
          Contact Seller
        </Button>
      </Card.Body>
    </Card>
  );
}

// Export the LastSearched component
export default LastSearched;
