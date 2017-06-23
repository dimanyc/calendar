import React, { Component } from 'react';

export default class Slot extends Component{

  constructor(props){
    super(props)
    console.log(props);
  }

  onDelete(){
    const id = this.props.id
    console.log(id);
    $.ajax({
      url: `/api/v1/nodes/${id}`,
      type: 'DELETE',
      success(response) {
        console.log('successfully removed item')
      } });
    console.log('in delete');
  }

  render(){
    return(
      <li
        onClick   = { ()=>this.onDelete()}
        className = "list-group-item">{this.props.title}
      </li>
    )
  }

}
