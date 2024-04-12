

const styles = {
  headerStyle: {
    background: "green",
    border: "8px silver solid",
    borderRadius: "10px"
  },
  headingStyle: {
    fontSize: "100px",
    color: "White",
    textAlign: "center",
    padding: "20px",
    margin: "0", 
    textShadow: "1px 1px 2px black"
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
