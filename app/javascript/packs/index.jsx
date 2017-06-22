import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class App extends Component {

  constructor(props){
    super(props)
    console.log(props);
  }

  render(){
    return(
      <div>Hello from the App component</div>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('index');
  const data = JSON.parse(node.getAttribute('data');
    console.log(data);
    ReactDOM.render(
      <App  { ...data }, />,
      node
    )
    document.body.appendChild(document.createElement('div')),
  )
})
