import React from 'react';
import { Fade } from 'react-slideshow-image';
import img1 from '../image/main_road.jpg' 
import img2 from '../image/street.jpg' 
import img3 from '../image/road.jpg' 
import './slideshow.css';
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={img1} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={img2} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={img3} />
          </div>
        </div>
      </Fade>
    </div>
  )
}
export default Slideshow