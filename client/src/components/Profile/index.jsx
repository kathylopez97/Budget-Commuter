import React, { useState } from "react";
import PostVehicle from '../PostVehicle/index';
import { Modal, Button } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';

function Profile() {

  const [postVehicle, setPostVehicle] = useState(false);
  const [validated, setValidated] = useState(false);


  return (
    <>
    <div>
      <h1>Welcome to your Profile</h1>

      <div>
        
        <Button variant="secondary" size="lg" onClick={() => setPostVehicle(true)}>
          Post Vehicle
        </Button>
        <Modal show={postVehicle} onHide={() => setPostVehicle(false)}>
          <PostVehicle />
        </Modal>
      </div>
    </div>
    </>
  )
}

export default Profile;