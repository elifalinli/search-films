import React from "react";
import { SubHeading } from "../../components";
import { BsArrowLeftShort, BsArrowRightShort, BsGoogle } from "react-icons/bs";
import imgOne from '../../assets/gallery1.jpeg'
import imgTwo from '../../assets/gallery2.jpeg'
import hygiene from '../../assets/hygiene.png'

import "./Gallery.css";

const gallery = [imgOne, imgTwo, hygiene]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") current.scrollLeft -= 300;
    else current.scrollLeft += 300;
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Google Maps" />
        <h1 className="headtext__cormorant"> Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          dfghjklkjhgfdfghjklkjhgfghj
        </p>
    
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {gallery.map((img, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index +1}`}>
              <img src={img} alt="gallery"/>
              <BsGoogle className="gallery__image-icon"/> </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
