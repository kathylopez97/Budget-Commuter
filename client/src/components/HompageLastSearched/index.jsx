// Import necessary components from react-bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'Homepage.css';
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
function LastSearched({ vehiclename, make, model, year, price }) {
    // Render a Card component with the passed props
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          {/* Display the vehicle name as the card title */}
          <Card.Title>{vehiclename}</Card.Title>
          <Card.Text>
            {/* Display the make, model, year, and price as the card text */}
            Make: {make} <br />
            Model: {model} <br />
            Year: {year} <br />
            Price: {price}
          </Card.Text>
          {/* Include a button on the card */}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

// Export the LastSearched component
export default LastSearched;
