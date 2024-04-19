import { Modal, Button, Card, ListGroup } from 'react-bootstrap';

const styles = {
  searchBarStyle: {
    border: "1px solid black",
    outline: "none",
    background: "#ebfffc",
    color: "#555",
    padding: "0px 17px",
    height: "46px",
    width: "50%",
    borderRadius: "4px",
    fontSize: "18",
    font: "italic",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  titleStyle: {
    fontSize: "36px",
  },
  textStyle: {
    color: "black",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    backgroundColor: "#grey",
    color: "black",
    border: "1px solid black",
    borderRadius: "4px",
    fontSize: "18px",
    fontWeight: "bold",
    padding: "10px 20px",
    marginBottom: "20px",

    marginLeft: "10px",
    width: "5%",

  },
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",

  },
  cardStyle: {
    width: "25rem",
    margin: "10px",
    display: "flex",
    flexDirection: "wrap",
    backgroundColor: "darkgrey",
  },
  listGroupStyle: {
    display: "block",
    justifyContent: "center",
    alignText: "center",
    fontSize: "24px"
  },
  hoverStlye: {
    cursor: "pointer",
  }
};

import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_VEHICLES } from '../../utils/queries';

// Define the SearchIt component
const ResultSelection = () => {
  // Define state variables for the search query, search results, and any error message
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const { loading, data } = useQuery(GET_VEHICLES, { variables: { query: query } });
  const [clickVehicle, setClickVehicle] = useState(false);

  // Define the function to handle the search
  const handleSearch = async (e) => {
    // Prevent the form from refreshing the page
    e.preventDefault();
    console.log("submitting", query);
    try {
      // Send a GET request to the search API with the current query
      console.log(data)
      // Update the results state with the received data
      setResults(data.searchVehicles);
    } catch (error) {
      // If an error occurs, update the error state with an error message
      console.error(error);
      setError('Error fetching data');
    }
  };

  // Render the component

  return (
    <div>
      {/* When the form is submitted, call the handleSearch function */}
      <form style={styles.containerStyle} onSubmit={handleSearch}>
        {/* Update the query state whenever the input field's value changes */}
        <input style={styles.searchBarStyle} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button style={styles.buttonStyle} type="submit">Search</button>
      </form>
      {/* Map over the results and render each one */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {results.map((vehicle,) => (
            // Need to look into a permanent key solution
            <div key={vehicle._id}>
              {/* Render each vehicle */}

              <Card style={styles.cardStyle}>
                <Card.Img variant="top" src="https://di-uploads-pod14.dealerinspire.com/oaklawntoyota/uploads/2020/01/2020-Toyota-Camry-Ruby-Flare-Pearl.png" />
                <Card.Body>
                  <Card.Title style={styles.titleStyle}>{vehicle.year} {vehicle.make} {vehicle.model}</Card.Title>
                </Card.Body>
                <ListGroup style={styles.listGroupStyle} className="list-group-flush">
                  <ListGroup.Item>Color: {vehicle.color}</ListGroup.Item>
                  <ListGroup.Item>Miles: {vehicle.miles}</ListGroup.Item>
                  <ListGroup.Item>Price: {vehicle.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link style={styles.hoverStlye} onClick={() => setClickVehicle(true)}> Vehicle Posting</Card.Link>
                  <Card.Link href="#">Contact Seller</Card.Link>
                </Card.Body>
              </Card>
              <Modal size='auto' show={clickVehicle} onHide={() => setClickVehicle(false)}>
                
                  <Modal.Header closeButton>
                    <Modal.Title>Vehicle Information</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Make: {vehicle.make}</p>
                    <p>Model: {vehicle.model}</p>
                    <p>Miles: {vehicle.miles}</p>
                    <p>Year: {vehicle.year}</p>
                    <p>Price: {vehicle.price}</p>
                    <p>Color: {vehicle.color}</p>
                  </Modal.Body>
              </Modal>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

// Export the Results Selection component


export default ResultSelection;