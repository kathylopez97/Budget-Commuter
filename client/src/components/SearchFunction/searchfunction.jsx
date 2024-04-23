// Import React and apollo
import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_VEHICLES } from '../../utils/queries';
// Import BootStrap styling
import Button from 'react-bootstrap/Button';
// This functions creates search bar for users to search ehicles
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [searchVehicles, { loading, error }] = useLazyQuery(SEARCH_VEHICLES, {
        variables: { query },
        onCompleted: (data) => {
            onSearch(data.searchResults);
        },
    });

    const handleSearch = () => {
        searchVehicles();
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <Button  onClick={handleSearch}variant="success" type="submit">
                Search</Button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};
// Export Searchbar

export default SearchBar;
