import React, { Component } from 'react';
import './index2.css';
import logo from '../image/logo_small.png'
import { Link } from '@version/react-router-v3';
class Nav extends Component{
    MenuItem = ({active, children, to}) => (
        <Link to={to} className="btn1">
                {children}
        </Link>
    )
   
    render(){
    return (
        <div className="navrap">
        <div className="nav">
            <a href="/dda"><img className="logo"src={logo} alt="logo"></img></a>
            <ul>
                <li><Link  className="ani" to="/dda/quiz">문제풀기</Link></li>
                <li><Link  className="ani" to="/dda/road">도로주행</Link></li>
                <li><Link  className="ani" to="/dda/board">게시판</Link></li>
                <li><a className="ani" href="https://www.safedriving.or.kr/" target="_blank">시험접수</a></li>
            </ul>
        </div>
        </div>
      
    );
    };
}
export default Nav;