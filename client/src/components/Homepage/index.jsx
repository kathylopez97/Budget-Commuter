// Import useState , bootstrap and homepage button from react
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../CarouselImage'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import Button from 'react-bootstrap/Button';
import HomePageBtn from '../HomePageBtn';

const styles = {
  homePageStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "100px",
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
// Create function of homepage
function HomePage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  // Return function of carousel images 

  return (
    <>
    <HomePageBtn/>
    <Carousel style={styles.homePageStyle} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={styles.imageStyle}
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/2020-lexus-gs-f-mmp-1-1580498320.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Affordable luxury by miles</h5>
          <p>2024 Lexus ES Hybrid Sadan </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.imageStyle}
          className="d-block w-100"
          src="https://media.ed.edmunds-media.com/chevrolet/corvette/2024/oem/2024_chevrolet_corvette_coupe_z06_fq_oem_1_1600.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>The best Place to find your dream car</h5>
          <p>2023 Chevrolet Corvette Stingray </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={styles.imageStyle}
          className="d-block w-100"
          src="https://i1.modland.net/i/65663509d0b53/screenshot_2023-12-19_01-16-50-lg_modland.webp"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>The most bang for your buck</h5>
          <p>
           2023 Ford F-150 Raptor 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </>
  );
  
   
}

// Export homepage
export default HomePage;