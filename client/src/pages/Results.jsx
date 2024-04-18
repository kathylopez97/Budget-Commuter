import React from 'react';
import ResultsSelection from '../components/ResultSelection/index.jsx';

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


const ResultsPage = () => {
    return (
        <div>
            <h1>Search Results</h1>
            <input style={styles.searchBarStyle} type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">Search</button>
            <ResultsSelection />
        </div>
    );
};

export default ResultsPage;
