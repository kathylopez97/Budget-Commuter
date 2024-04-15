import React, {useState} from 'react';
import axios from 'axios';

const SearchIt = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`http://localhost:5000/api/search?search=${query}`);
            setResults(data);
        } catch (error) {
            setError('Error fetching data');
        }
    };
    
    return (
        <div>
          <form onSubmit={handleSearch}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
          </form>
          {results.map((vehicle) => (
            <div key={vehicle._id}>
              {/* Render each vehicle */}
              {vehicle.name}
            </div>
          ))}
        </div>
      );

    
};

export default SearchIt;