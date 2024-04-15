import Button from "react-bootstrap/Button";

const styles = {
  introStyle: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "20px",
    fontSize: "28px",
    color: "black",

  },
  ButtonStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "evenly-space",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "28px",
    color: "black",
  },
  ButtonDivStyle: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    marginBottom: "20px",
    width: "30%",
    margin: "0 auto",
  },
};

function HomePageBtn({ user }) {
  return (
    <div style={styles.introStyle}>
      <h1 style={styles.textStyle}>Welcome to Budget Commuters {user}</h1>
      <p style={styles.textStyle}>
        The best place to find your dream car at an affordable price
      </p>
      <div style={styles.ButtonDivStyle}>

        <Button  href="" variant="secondary" size="lg">
            Profile
        </Button>{" "}
        <Button href="" variant="secondary" size="lg">
            Post Vehicle
        </Button>
        <Button  href="" variant="secondary" size="lg">
            Search
        </Button>
      </div>
    </div>
    
  );
}

export default HomePageBtn;
