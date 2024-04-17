import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_VEHICLES } from '../../utils/queries';

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
            <button onClick={handleSearch}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default SearchBar;
