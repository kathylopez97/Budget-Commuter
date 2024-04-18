import Button from "react-bootstrap/esm/Button";

const styles = {
  headerStyle: {
    background: "green",
    border: "3px silver solid",
    borderRadius: "10px",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  
  headingStyle: {
    fontSize: "100px",
    color: "White",
    textAlign: "center",
    padding: "20px",
    margin: "0", 
    textShadow: "1px 1px 2px black"
  },
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

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Budget Commuters</h1>
    </header>
  );
}

export default Header;
