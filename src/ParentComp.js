import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"VG"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"VG"
            })
        }, 3000)
    }
  render() {
    return (
      <div>I'm the Parent Component 
          <RegComp name={this.state.name}/>
          <PureComp name={this.state.name}/>
          </div> 
    )
  }
}

export default ParentComp