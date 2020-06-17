import React, { Component } from 'react';
import './quiz.css';
class quiz extends Component {
  state = {
    word : '이주상',
    value : '',
    time:0,
    result : [''],
    hae:[['도로교통법 제73조(교통안전교육)③ 다음 각 호의 어느 하나에 해당하는 사람이 지방경찰청장에게 신청하는 경우에는 대통령령으로 정하는 바에 따라 특별교통안전 권장교육을 받을 수 있다. 이 경우 권장교육을 받기 전 1년 이내에 해당 교육을 받지 아니한 사람에 한정한다.' ]
        ,['18세 미만(원동기장치자전거의 경우에는 16세미만)인 사람은 운전면허를 받을 수 없고, 제1종 대형면허 및 제1종 특수면허를 받으려는 경우로서 19세 미만이거나 자동차(이륜자동차를 제외한다)의 운전경험이 1년 미만인 사람은 운전면허를 받을 수 없다.']],
    answer: ['1','4','4'],
    bogi:[["2년","3년","4년","5년"],
          ["운전면허를 받은 사람 중 교육을 받으려는 날에 65세 이상인 사람","운전면허효력 정지처분을 받고 그 정지기간이 끝나지 아니한 초보운전자로서 특별교통안전      의무교육을 받은 사람","교통법규 위반 등으로 인하여 운전면허효력 정지처분을 받을 가능성이 있는 사람","적성검사를 받지 않아 운전면허가 취소된 사람"],
          ["15세","16세","17세","18세"],[]
         ],
    quiz:["도로교통법상 초보운전자의 기준은 처음 운전면허를 받은 날부터 얼마가 경과되지 아니한 사람을 말하는가?",
          "다음 중 특별교통안전 권장교육 대상자로 아닌 사람은?",
          "도로교통법상 제2종 소형면허를 취득할 수 있는 연령 기준으로 맞는 것은? ",""
         ]
         ,
         a:4
  };

  onSubmitForm= (e) =>{
    e.preventDefault();
    
    if(this.state.answer[this.state.time] === this.state.value){
        
      this.setState({
      
        value:'',
        time: this.state.time +1
      });
      
    }else {
      this.setState({
        result:this.state.result.concat(this.state.time),
        value:'',
        time: this.state.time +1
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
      
       
        { this.state.time < 3 ?
         <div className="quizdiv">
        <h1>{this.state.time+1}. </h1><h4>{this.state.quiz[this.state.time]}</h4><br/><br/>
        <br/>
        <form onSubmit={this.onSubmitForm}>
          <button className="btnQ" value = "1" onClick={this.onChange}>1</button><h5>{this.state.bogi[this.state.time][0]}</h5><br/><br/>
          <button className="btnQ" value = "2" onClick={this.onChange}>2</button><h5>{this.state.bogi[this.state.time][1]}</h5><br/><br/>
          <button className="btnQ" value = "3" onClick={this.onChange}>3</button><h5>{this.state.bogi[this.state.time][2]}</h5><br/><br/>
          <button className="btnQ" value = "4" onClick={this.onChange}>4</button><h5>{this.state.bogi[this.state.time][3]}</h5><br/><br/>
        </form>
        </div>
        :  <div className="quizdiv">
          <h2>틀린 문제</h2><br/>
          { this.state.result[1]!==null  ?
          <div>
          <h1>{this.state.result[1]+1}. </h1><h4>{this.state.quiz[this.state.result[1]]}</h4><br/><br/>
          <form onSubmit={this.onSubmitForm}>
          <button className="btnQ" value = "1" >1</button><h5>{this.state.bogi[this.state.result[1]][0]}</h5><br/><br/>
          <button className="btnQ" value = "2" >2</button><h5>{this.state.bogi[this.state.result[1]][1]}</h5><br/><br/>
          <button className="btnQ" value = "3" >3</button><h5>{this.state.bogi[this.state.result[1]][2]}</h5><br/><br/>
          <button style={{background:"red"}}className="btnQ" value = "4" >4</button><h5>{this.state.bogi[this.state.result[1]][3]}</h5><br/><br/>
          </form>
          <h2>해설</h2> {this.state.hae[0]}
          </div>
          : "" }
        { this.state.result[2]!==null  ?
          <div>
          <h1>{this.state.result[2]+1}. </h1><h4>{this.state.quiz[this.state.result[2]]}</h4><br/><br/>
          <form onSubmit={this.onSubmitForm}>
          <button className="btnQ" value = "1" >1</button><h5>{this.state.bogi[this.state.result[2]][0]}</h5><br/><br/>
          <button className="btnQ" value = "2" >2</button><h5>{this.state.bogi[this.state.result[2]][1]}</h5><br/><br/>
          <button className="btnQ" value = "3" >3</button><h5>{this.state.bogi[this.state.result[2]][2]}</h5><br/><br/>
          <button style={{background:"red"}} className="btnQ" value = "4" >4</button><h5>{this.state.bogi[this.state.result[2]][3]}</h5><br/><br/>
          </form>
          <h2>해설</h2> {this.state.hae[1]}
          </div>
          : "" }
          
        </div>
        }
        
  
      </div>
    );
  }
}


export default quiz;