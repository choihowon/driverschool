import React, { Component } from 'react';
import './road.css';

import Iframe from 'react-iframe';
import SideList from './list.js';
class road extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:""
    };
    }

    dobong = () => {
        this.setState({
            src:"./road/dobong.html"
        })
    }
    gangseoA = () => {
        this.setState({
            src:"./road/gangseoA.html"
        }) 
    }
    gangnamA = () => {
      this.setState({
          src:"./road/gangnamA.html"
      })
  }
  gangnamB = () => {
    this.setState({
        src:"./road/gangnamB.html"
    })
}
gangnamC = () => {
  this.setState({
      src:"./road/gangnamC.html"
  })
}
  render() {
    return (
      <div className="d2">
      <div className="roaddiv">
        <div className="submenu" id="daumSubmenu">
        <SideList Name= "도봉" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "강남" btnA={this.gangnamA} btnB={this.gangnamB} btnC={this.gangnamC} btnD={this.dobong}/>
        <SideList Name= "강서" btnA={this.gangseoA} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "서부" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "부산북부" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "부산남부" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "용인" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "안산" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "의정부" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "춘천" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "강릉" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "원주" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "태백" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "전북" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "전남" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "광양" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "청주" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "충주" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "예산" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "문경" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "포항" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "마산" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "인천" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "대구" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "대전" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "울산" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
        <SideList Name= "제주" btnA={this.dobong} btnB={this.dobong} btnC={this.dobong} btnD={this.dobong}/>
  
        </div>

        <div className="mapdiv">
          <Iframe url={this.state.src}
          width="100%"
          height="870px"
          id="myId"
          className="road"
          display="initial"
          position="relative"
          frameBorder="none"/>
        </div>
      </div>
      </div>
    );
  }
}

export default road;