import React, { Component } from 'react';
import './index2.css';


class Header extends Component{
   render(){
    return (

        <div className="top_login">
        <div className="top_login_wrap">
            <a href="/dda/login.html" className="top_login_menu">로그인</a>   | 
            <a href="/dda/signup.html" className="top_login_menu">회원가입</a>
            
        </div>
        </div>


    );
    };
}
export default Header;