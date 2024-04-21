// Import react and css styling for images
import React from "react";
import "./image.css";
{
  /* Import Carousel Image onto home page*/
}
function CarouselImage(_ref) {
  var image = _ref.image;
  return /*#__PURE__*/ React.createElement(
    "div",
    {
      className: "carousel-image",
    },
    /*#__PURE__*/ React.createElement("img", {
      src: image,
      alt: "carousel",
    })
  );
}
{/* export image*/}
export default CarouselImage;
