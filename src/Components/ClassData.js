import React, { Component } from 'react'

export default class ClassData extends Component { 
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      } 
      this.handleclick = this.handleclick.bind(this)
    } 
     handleclick = ()=>{
        this.setState({counter:this.counter+1})
    }
  render() {
    return (
      <div> 
        {this.state.counter}
        <button onClick={handleclick}>Click</button>
      </div>
    )
  }
}
