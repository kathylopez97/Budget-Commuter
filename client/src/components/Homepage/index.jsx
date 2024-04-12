import Button from "react-bootstrap/Button";

const styles = {
  homePageStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "500px",
    marginBottom: "500px",
  },
  textStyle: {
    fontStyles: "italic",
    fontSize: "30px",
    fontColor: "black",
  },
  searchBarStyle: {
    color: "black",
    marginLeft: "5px",
    
  },
};

export function HomePage() {
  return (
    <div style={styles.homePageStyle} className="homePage">
    
      <input type="text" placeholder="Search.."></input>
      <Button style={styles.searchBarStyle} variant="primary">Search </Button>
    </div>
  );
}

export default HomePage;
