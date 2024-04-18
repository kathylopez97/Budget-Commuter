import React from 'react';
import ResultsSelection from '../ResultSelection';

const styles = {
   textStyle: {
    fontWeight: "bold",
    padding: "10px 20px",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
    color: "black",
    fontSize: "54px",
    textAlign: "center",
  },
  };


const ResultsPage = () => {
    return (
        <div>
            <h1 style={styles.textStyle}>Search Results</h1>
            <ResultsSelection />
        </div>
    );
};

export default ResultsPage;

