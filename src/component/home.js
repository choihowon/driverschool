import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fw from './flowTest';
import Mb from './mainboard';
import Map from './map';
import Slideshow from './slideshow.js';
class home extends Component {
  
  render(){
  return (
    
  <div >
    <Slideshow className="SS"/>
    <Fw />
    <Mb />
    <Map />
  </div>
   
  );
}
}

export default home;
