
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage'
import CarouselCaption from 'react-bootstrap/CarouselCaption'

const styles = {
  homePageStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "250px",
    marginBottom: "250px",
    marginLeft:"250px",
    width: "75%",
    height: "750px",
    background:"grey",
  },
  textStyle: {
    fontStyles: "italic",
    fontSize: "30px",
    fontColor: "black",
  },
  imageStyle: {
    width: "100%",
    height: "750px",
  
  },

};

function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={styles.homePageStyle} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={styles.imageStyle}
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/2020-lexus-gs-f-mmp-1-1580498320.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.imageStyle}
          className="d-block w-100"
          src="https://media.ed.edmunds-media.com/chevrolet/corvette/2024/oem/2024_chevrolet_corvette_coupe_z06_fq_oem_1_1600.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.imageStyle}
          className="d-block w-100"
          src="https://i1.modland.net/i/65663509d0b53/screenshot_2023-12-19_01-16-50-lg_modland.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default HomePage;