import React, { Component } from "react";
import { Table } from "react-bootstrap";
import BigText from './BigText';
import { Link } from '@version/react-router-v3';
import { NavLink } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

//게시글 뿌려주기
class BoardRow extends Component {
  state = {
    board: []
  };

  getBoard = _id => {
    const send_param = {
      headers,
      _id
    };
    axios
      .post("http://localhost:3002/board/detail", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.board[0]) {
          const board = (
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>returnData.data.board[0].title</th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          );
          this.setState({
            board: board
          });
        } else {
          alert("글 상세 조회 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
    render() {
      return (
        <tr>
          <td>
            <Link
              to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
            >
              {this.props._id}
            </Link>
          </td>
          <td>
            <Link
              to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
            >
              {this.props.title}
            </Link>
            </td>
            <td>
            <Link
              to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
            >
              {this.props.title}
            </Link>
          </td>
          <td>
            <Link
              to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
            >
              {this.props.createdAt.substring(0, 10)}
            </Link>
          </td>
          <td>
            <Link
              to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
            >
              1
            </Link>
          </td>
          <td>
            <Link
              to={{ pathname: "/board/detail", query: { _id: this.props._id } }}
            >
              1
            </Link>
          </td>
        </tr>
      );
    }
  }

  class Board extends Component {
    state = {
      boardList: []
    };
  
    componentDidMount() {
      this.getBoardList();
    }
  
    getBoardList = () => {
      const send_param = {
        headers,
        _id: $.cookie("_id")
      };
      axios
        .post("http://localhost:3002/board/getBoardList", send_param)
        .then(returnData => {
          let boardList;
          if (returnData.data.list.length > 0) {
            // console.log(returnData.data.list.length);
            const boards = returnData.data.list;
            boardList = boards.map(item => (
              <BoardRow
                key={Date.now() + Math.random() * 500}
                _id={item._id}
                createdAt={item.createdAt}
                title={item.title}
              ></BoardRow>
            ));
            // console.log(boardList);
            this.setState({
              boardList: boardList
            });
          } else {
            boardList = (
              <tr>
                <td colSpan="6">작성한 게시글이 존재하지 않습니다.</td>
              </tr>
            );
            this.setState({
              boardList: boardList
            });
            // window.location.reload();
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    render() {
      const divStyle = {
        margin: 50
      };
  
      return (
        <div>
          <div style={divStyle}>
            <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th width="10%">게시글번호</th>
                                    <th width="30%">제목</th>
                                    <th width="10%">글쓴이</th>
                                    <th width="10%">등록날짜</th>
                                    <th width="10%">조회수</th>
                                    <th width="10%">추천수</th>
                                </tr>
                            </thead>
                            
                            <tbody>{this.state.boardList}</tbody>
            </Table>
                        <Link to="/dda/BoardWriteForm">      
                        <input type="button" value="글쓰기" id="btn_newcontent" class="btn"></input>          
                        </Link>
        </div>
        </div>
    );
    }
};

export default Board;