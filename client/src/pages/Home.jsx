import { useState } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Row
} from 'react-bootstrap';

//NEEDED THIS PAGE TO MAKE THINGS WORk. From book project, It works though


const SearchVehicles = () => {

  const [searchInput, setSearchInput] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

  };


  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Vehicles!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a vehicle'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <Row>
        </Row>
      </Container>
    </>
  );
};

export default SearchVehicles;
