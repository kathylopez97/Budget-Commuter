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
      alignItems: "evenly-spaced",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "28px",
      color: "black",
    },
};


function HomePageBtn({user}) {
    return (
        <div style={styles.introStyle}>
        <h1 style={styles.textStyle}>Welcome to Budget Commuters {user}</h1>
        <p style={styles.textStyle}>The best place to find your dream car at an affordable price</p>
        <Button style={styles.ButtonStyle} href="" variant="secondary" size="lg">
            Profile
          </Button>{' '}
          <Button style={styles.ButtonStyle} href=""  variant="secondary" size="lg">
            Post Vehicle
          </Button>
          <Button style={styles.ButtonStyle} href=""  variant="secondary" size="lg">
            Search
          </Button>
      </div>
    );
}

export default HomePageBtn;