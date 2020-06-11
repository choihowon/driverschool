import React, { Component } from 'react';
import './quiz.css';
class quiz extends Component {
  state = {
    word : '이주상',
    value : '',
    time:0,
    result : '',
    answer: ['1','4','4'],
    bogi:[["2년","3년","4년","5년"],
          ["운전면허를 받은 사람 중 교육을 받으려는 날에 65세 이상인 사람","운전면허효력 정지처분을 받고 그 정지기간이 끝나지 아니한 초보운전자로서 특별교통안전      의무교육을 받은 사람","교통법규 위반 등으로 인하여 운전면허효력 정지처분을 받을 가능성이 있는 사람","적성검사를 받지 않아 운전면허가 취소된 사람"],
          ["15세","16세","17세","18세"],[]
         ],
    quiz:["도로교통법상 초보운전자의 기준은 처음 운전면허를 받은 날부터 얼마가 경과되지 아니한 사람을 말하는가?",
          "다음 중 특별교통안전 권장교육 대상자로 아닌 사람은?",
          "도로교통법상 제2종 소형면허를 취득할 수 있는 연령 기준으로 맞는 것은? ",""
         ]
  };

  onSubmitForm= (e) =>{
    e.preventDefault();
    
    if(this.state.answer[this.state.time] === this.state.value){
        
      this.setState({
        result:'딩동댕',
        value:'',
        time: this.state.time +1
      });
      
    }else {
      this.setState({
        result:'땡',
        value:'',
      });
    
    }
  }
  onChange = (e) => {
    this.setState({value:e.target.value});
  }
  input;

 
  render() {
    return (
      <div className="d1">
      <div className="title">운전면허 자격증 기출문제</div>
      <div className="quizdiv">
      <h1>{this.state.time+1}. </h1><h4>{this.state.quiz[this.state.time]}</h4><br/><br/>
        <br/>
        <form onSubmit={this.onSubmitForm}>
          <button className="btnQ" value = "1" onClick={this.onChange}>1</button><h5>{this.state.bogi[this.state.time][0]}</h5><br/><br/>
          <button className="btnQ" value = "2" onClick={this.onChange}>2</button><h5>{this.state.bogi[this.state.time][1]}</h5><br/><br/>
          <button className="btnQ" value = "3" onClick={this.onChange}>3</button><h5>{this.state.bogi[this.state.time][2]}</h5><br/><br/>
          <button className="btnQ" value = "4" onClick={this.onChange}>4</button><h5>{this.state.bogi[this.state.time][3]}</h5><br/><br/>
          <br/>{this.state.result}<br/>
        </form>
      </div>
  
      </div>
    );
  }
}


export default quiz;