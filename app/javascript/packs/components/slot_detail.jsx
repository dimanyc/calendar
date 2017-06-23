import React, { Component } from 'react';


export default class SlotDetail extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="col-md-12">
        <h1>{this.props.date}</h1>
      </div>
    )
  }

}
