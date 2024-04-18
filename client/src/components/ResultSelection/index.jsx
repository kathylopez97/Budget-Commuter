import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



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
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
    font: "italic",
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
          <form onSubmit={handleSearch}>
            {/* Update the query state whenever the input field's value changes */}
            <input style={styles.searchBarStyle} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
          </form>
          {/* Map over the results and render each one */}
          {loading? (
            <div>Loading...</div>
          ) : (
            <div>
              {results.map((vehicle) => (
                <div key={vehicle._id}>
                  {/* Render each vehicle */}
                  <p>Vehicle info</p>
                  {vehicle.name}
                </div>
              ))}
            </div>
          )}
         
        </div>
    );
};

// Export the Results Selection component


export default ResultSelection;