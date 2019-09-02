import React from 'react';

import './App.css';

import a from '../src/image/1.jpg'
import b from '../src/image/2.jpg'
import c from '../src/image/3.jpg'


class App extends React.Component {
state= {
  Img : a,
  Name:'Anas',
Description:'Anas ya 8oul'
}


  render(){
    return (<>
    <button onClick={()=>{this.setState({
      Img:a,
      Name:'Anas',
      Description:'Anas ya 8oul'
    })}} >sarra</button>
    <button onClick={()=>{this.setState({
     Img:b ,
     Name:'7ama',
     Description:'7ama ya wa7ch'
    })}} >harold</button>
    <button onClick={()=>{this.setState({
      Img:c,
      Name:'Bro',
      Description:'hahahahahahaha :D'
    })}} >Daniel</button>
    <div>
      <h1 >{this.state.Name}</h1>
    <img style={{width:"250px"}} src={this.state.Img}></img>
    <p>{this.state.Description}</p>


</div>
    </>


      );

  }
 
  
}

export default App;
