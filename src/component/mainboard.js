import React, { Component } from 'react';
import './mainboard.css';
import './index2.css'
import { Link } from '@version/react-router-v3';


class MB extends Component {

    MenuItem = ({active, children, to}) => (
        <Link to={to} className="btn1">
                {children}
        </Link>
    )


  render(){
    return (
    <div class="board">
    <div class="section">
        <form>
        <div class="article">
            <table class="who">
                <tr>
                    <td><div class="p">최신글</div></td>
                    <td><div class="more"><Link class="more" to="/dda/board">더보기 ></Link></div></td>
                </tr>
            </table>
            <div class="line"></div>
            <table class="notice">
                <tr><td>·</td><td>안녕하세요!</td><td>2020-05-16</td></tr>
                <tr><td>·</td><td>감사해요!</td><td>2020-04-16</td></tr>
                <tr><td>·</td><td>잘있어요!</td><td>2020-03-16</td></tr>
                <tr><td>·</td><td>다시 만나요!</td><td>2020-02-16</td></tr>
                <tr><td>·</td><td>화려한 조명이</td><td>2020-01-16</td></tr>
            </table>
        </div>
        <div class="article" id="article2">
            <table class="who">
                <tr><td><div class="p">추천글</div></td><td>
                <div class="more"><Link class="more" to="/dda/board">더보기 ></Link></div></td></tr>
            </table>
            <div class="line"></div>
            <table class="notice">
                <tr><td>·</td><td>도봉운전면허시험장 근처</td><td>2020-05-16</td></tr>
                <tr><td>·</td><td>제주도 운전면허</td><td>2020-04-16</td></tr>
                <tr><td>·</td><td>강서 운전면허시험장 옆에</td><td>2020-03-16</td></tr>
                <tr><td>·</td><td>강원도 운전면허 시험</td><td>2020-02-16</td></tr>
                <tr><td>·</td><td>서울 근처에 계신</td><td>2020-01-16</td></tr>
            </table>
        </div>
        </form>
    </div>
    </div>
  );
}
}

export default MB;
