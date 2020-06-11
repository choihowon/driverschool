import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Nav from './component/nav';

class App extends Component {

  
  render(){
  return (  
    <div>
      
      <Header/>
      <Nav/>
      {this.props.children}
      
    </div>
    
  );
  
}
}

export default App;
