
import React, { useState } from "react";
import PostVehicle from '../PostVehicle/index';
import {Modal, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'



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
  const [postVehicle, setPostVehicle] = useState(false);
  const [validated, setValidated] = useState(false);

  return (
    <div style={styles.introStyle}>
      <h1 style={styles.textStyle}>Welcome to Budget Commuters {user}</h1>
      <p style={styles.textStyle}>
        The best place to find your dream car at an affordable price
      </p>
      <div style={styles.ButtonDivStyle}>
        <Button  href="/profile" variant="secondary" size="lg">
            Profile
        </Button>
        <Button variant="secondary" size="lg" onClick={()=>setPostVehicle(true)}>
            Post Vehicle
        </Button>
        <Modal show={postVehicle} onHide={()=>setPostVehicle(false)}>
          <PostVehicle/>
          </Modal>
      </div>
    </div>
    
  );
}

export default HomePageBtn;
