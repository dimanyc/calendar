import React, { Component } from 'react';
import Slot from './slot';

export default class SlotList extends Component {

  constructor(props){
    super(props)
  }

  render(){

    const slots = this.props.slots.map((slot) => {
      return (
        <Slot
          id    = { slot.id }
          key   = { slot.id }
          title = { slot.title }
          setCurrentSlot = { this.props.setCurrentSlot }
        />
      )
    });

    return(
      <ul className="list-group">
        { slots }
      </ul>
    )
  }

}
