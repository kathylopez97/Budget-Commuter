// Import React and ResultsSelections page 
import React from 'react';
import ResultsSelection from '../ResultSelection';

const styles = {
   textStyle: {
    fontWeight: "bold",
    padding: "10px 20px",
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
    color: "black",
    fontSize: "54px",
    textAlign: "center",
  },
  };

// This functions create header title to search vehicles
const ResultsPage = () => {
    return (
        <div>
            <h1 style={styles.textStyle}>Search Results</h1>
            <ResultsSelection />
        </div>
    );
};
// Export Results Page
export default ResultsPage;

