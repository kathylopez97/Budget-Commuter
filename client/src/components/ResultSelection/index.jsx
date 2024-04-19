import { Modal, Button, Card, ListGroup, Alert, Form } from 'react-bootstrap';

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
import Auth from '../../utils/auth'
import PostVehicle from '../PostVehicle/index'

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


  const [editVehicle, setEditVehicle] = useState(false)


  const getSeller = () => {
    setEditVehicle(true);
  }

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

                  {/* {Added this in, Only authorized people can see sell vehicle} */}
                  {Auth.getProfile(vehicle.user).data._id === vehicle.user ? (
                    <>
                      <Card.Link style={styles.hoverStlye} onClick={() => setEditVehicle(true)}>Edit Vehicle</Card.Link>
                      <Modal show={editVehicle} onHide={() => setEditVehicle(false)}>
                      <>
                            <Form.Label htmlFor='make'>Make</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Make'
                                name='make'
                                value={vehicle.make}
                                required
                            />
                            <Form.Label htmlFor='model'>Model</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Model'
                                name='model'
                                value={vehicle.model}
                                required
                            />

                            <Form.Label htmlFor='year'>Year</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Year'
                                name='year'
                                value={vehicle.year}
                                required
                            />
                            <Form.Label htmlFor='color'>Color</Form.Label>
                            <Form.Control
                                type='text'
                                placeholder='Color'
                                name='color'
                                value={vehicle.color}
                                required
                            />
                            <Form.Label htmlFor='miles'>Miles</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Miles'
                                name='miles'
                                value={vehicle.miles}
                                required
                            />
                            <Form.Label htmlFor='price'>Price</Form.Label>
                            <Form.Control
                                type='number'
                                placeholder='Price'
                                name='price'
                                value={vehicle.price}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Please fill out all fields</Form.Control.Feedback>
                            <Button className="mt-4" type='submit' variant='success'>Post Vehicle</Button>
                        </>
                      </Modal>
                    </>

                  ) : (
                    ''
                    // {Put code here if you want the buyers to have another option. Seller stuff goes next to Edit Vehicle}
                  )}


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