// Import React, and Bootstrap styling
import React, { useState } from "react";
import PostVehicle from '../PostVehicle/index';
import { Modal, Button } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
// This creates profile for users to post vehicle
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
// Export Profile
export default Profile;