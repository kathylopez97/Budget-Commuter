import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const styles = {
  searchBarStyle: {
    border: "1px solid black",
    outline: "none",
    background: "#ebfffc",
    color:"#555",
    padding: "0px 17px",
    height: "46px",
    width:"50%",
    borderRadius: "4px",
    fontSize: "18",
   
  
    font: "italic",
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
    margin: "10px",
    width: "5%",
    
  },
  containerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",

  },
  
};

import { useState, useEffect } from 'react';
import {useQuery} from '@apollo/client';
import {GET_VEHICLES} from '../../utils/queries';

// Define the SearchIt component
const ResultSelection = () => {
    // Define state variables for the search query, search results, and any error message
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const {loading, data } = useQuery(GET_VEHICLES, {variables: {query: query}});

    // Define the function to handle the search
    const handleSearch = async (e) => {
        // Prevent the form from refreshing the page
        e.preventDefault();
        console.log("submitting", query);
        try {
          // Send a GET request to the search API with the current query
            console.log(data.searchVehicles)
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
          {loading? (
            <div>Loading...</div>
          ) : (
            <div>
              {results.map((vehicle, index) => (
                // Need to look into a permanent key solution
                <div key={index}>
                  {/* Render each vehicle */}
                              
                              <Card style={{ width: '25rem' }}>
                      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                      <Card.Body>
                        <Card.Title>{vehicle.year} {vehicle.make} {vehicle.model}</Card.Title>              
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>{vehicle.color}</ListGroup.Item>
                        <ListGroup.Item>{vehicle.miles}</ListGroup.Item>
                        <ListGroup.Item>{vehicle.price}</ListGroup.Item>
                      </ListGroup>
                      <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                </div>
              ))}
            </div>
          )}
         
        </div>
    );
};

// Export the Results Selection component


export default ResultSelection;