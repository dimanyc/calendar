import React, { Component } from 'react';
import SearchBar from './searchbar';
import SlotDetail from './slot_detail';
import SlotList   from './slot_list';
import moment     from 'moment';

export default class Root extends Component {

  constructor(props){
    super(props)
    this.state = {
      date: moment().format("MMM Do YY")
    }
  }

  setCurrentSlot(slot){
    this.setState(  {
      date: slot.title
    })
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <SearchBar />
            <SlotDetail date={this.state.date} />
          </div>
          <div className="col-md-5">
            <SlotList
              slots = { this.props.slots }
              setCurrentSlot = { this.setCurrentSlot() } />
          </div>
        </div>
      </div>
    )
  }
}
