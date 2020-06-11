import React, { Component } from 'react';
import './index2.css';
import img1 from '../image/1.png';
import img2 from '../image/2.png';
import img3 from '../image/3.png';
import img4 from '../image/4.png';
import img5 from '../image/5.png';
import img6 from '../image/6.png';
import arrow from '../image/arrow.png';

class flowTest extends Component{
   render(){
    return (
        
      <div class="flow_test">
      <div class="flow_title"><h3>운전면허 취득과정</h3></div>
      <div class="flow_menu">
          <div class="flow_text">교통안전교육</div>
          <div class="flow_icon"><img src={img1} alt=""/></div>
      </div>
      <div class="arrow">
          <img src={arrow}/>
      </div>
      <div class="flow_menu">
          <div class="flow_text">신체검사</div>
          <div class="flow_icon"><img src={img2} alt=""/></div>
      </div>
      <div class="arrow">
          <img src={arrow}/>
      </div>
      <div class="flow_menu">
          <div class="flow_text">학과 시험</div>
          <div class="flow_icon"><img src={img3} alt=""/></div>
      </div>
      <div class="arrow">
          <img src={arrow}/>
      </div>
      <div class="flow_menu">
          <div class="flow_text">기능 시험</div>
          <div class="flow_icon"><img src={img4} alt=""/></div>
      </div>
      <div class="arrow">
          <img src={arrow}/>
      </div>
      <div class="flow_menu">
          <div class="flow_text">도로주행 시험</div>
          <div class="flow_icon"><img src={img5} alt=""/></div>
      </div>
      <div class="arrow">
          <img src={arrow}/>
      </div>
      <div class="flow_menu">
          <div class="flow_text">면허증 발급</div>
          <div class="flow_icon"><img src={img6} alt=""/></div>
      </div>
  </div>
    );
    };
}
export default flowTest;