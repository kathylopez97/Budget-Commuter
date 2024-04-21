import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SignUpForm from '../SignupForm';
import LoginForm from '../LoginForm';
import Auth from '../../utils/auth';
import './Navbar.css';
import logo from '../NavBar/logo.png';
import PostVehicle from '../PostVehicle/index'

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="100"
              height="100"
              className="Logo"
            />{''}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <button type="button" class="btn btn-success" size="lg">
                  Home</button>

              </Nav.Link>

              <Nav.Link href="/results">
                <button type="button" class="btn btn-success" size="lg">
                  Search</button></Nav.Link>
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/favorites'>
                    <button type="button" class="btn btn-success"size="lg">
                      See your vehicles
                    </button>
                  </Nav.Link>

                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  <button type="button" class="btn btn-success" size="lg">
                    Login/Sign Up</button></Nav.Link>
              )}
              {/* set modal data up */}
              <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'>
                {/* tab container to do either signup or login component */}
                <Tab.Container defaultActiveKey='login'>
                  <Modal.Header closeButton>
                    <Modal.Title id='signup-modal'>
                      <Nav variant='pills'>
                        <Nav.Item>
                          <Nav.Link
                            eventKey='login'>
                           Login
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey='signup'> 

                            Sign Up
                      
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Tab.Content>
                      <Tab.Pane eventKey='login'>
                        <LoginForm handleModalClose={() => setShowModal(false)} />
                      </Tab.Pane>
                      <Tab.Pane eventKey='signup'>
                        <SignUpForm handleModalClose={() => setShowModal(false)} />
                      </Tab.Pane>
                    </Tab.Content>
                  </Modal.Body>
                </Tab.Container>
              </Modal>

              <NavDropdown title="Click here for more info" id="dark-nav-dropdown">
                <NavDropdown.Item href="/termsandagreement">
                  Terms And Agreements
                </NavDropdown.Item>
                <NavDropdown.Item href="/privacypolicy">Privacy Policy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/contactus">
                  Contact us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>



    </>


  );
};

export default AppNavbar;