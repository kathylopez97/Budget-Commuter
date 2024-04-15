import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const styles = {
    LastSearchedStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: "30px",
        fontSize: "28px",
        color: "white",
    },
    
};


function LastSearched({ vehiclename, make, model, year, price }) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{vehiclename}</Card.Title>
          <Card.Text>
            Make: {make} <br />
            Model: {model} <br />
            Year: {year} <br />
            Price: {price}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default LastSearched;
