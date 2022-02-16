import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import photox from './photox.jpg'

export default class App extends Component {
 
 
 state= {fullName:'houcine bouattour', bio:'developer',img: photox, profession:'developer full Stack',show: false, counter:0 }
 
 

         
showContent=()=>{

  if(this.state.show)
  {
    this.setState({show:false})
   
  }
  else  {
    setInterval(()=>{
        this.setState({counter:this.state.counter+1}) }, 1000  );      
        this.setState({show:true})
 this.setState({counter:0} )

       }
   
 }

 render() {
   return  <div  style={{border:"solid 1px black",maxWidth:"100vw", textAlign: "center" }}>
     
     {this.state.show ? <div >
   <p> <img src={this.state.img}></img></p>
   <h1>{this.state.fullName}</h1>
   <p>{this.state.bio}</p>
   <p>{this.state.profession }</p>
   <h1>{this.state.counter}</h1>
   </div> :''}
   <button 
       style={{backgroundColor:"red" ,border:"solid 1px black",maxWidth:"100vw", textAlign: "center"}}  
     
        onClick={this.showContent}>welcome</button>
   
         
   
  
 </div>
 }
}

