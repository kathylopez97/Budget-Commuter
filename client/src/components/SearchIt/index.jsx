// Import necessary modules from react and axios
import {useState} from 'react';
import axios from 'axios';

// Define the SearchIt component
const SearchIt = () => {
    // Define state variables for the search query, search results, and any error message
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    // Define the function to handle the search
    const handleSearch = async (e) => {
        // Prevent the form from refreshing the page
        e.preventDefault();
        try {
            // Send a GET request to the search API with the current query
            const { data } = await axios.get(`http://localhost:3001/api/search?search=${query}`);
            // Update the results state with the received data
            setResults(data);
        } catch (error) {
            // If an error occurs, update the error state with an error message
            setError('Error fetching data');
        }
    };
    
    // Render the component
    return (
        <div>
          {/* When the form is submitted, call the handleSearch function */}
          <form onSubmit={handleSearch}>
            {/* Update the query state whenever the input field's value changes */}
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
          </form>
          {/* Map over the results and render each one */}
          {results.map((vehicle) => (
            <div key={vehicle._id}>
              {/* Render each vehicle */}
              {vehicle.name}
            </div>
          ))}
        </div>
    );
};

// Export the SearchIt component
export default SearchIt;