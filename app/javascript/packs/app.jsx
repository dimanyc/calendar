import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('nodes')
  const data = JSON.parse(node.getAttribute('data'))
    ReactDOM.render(
      <Root {...data} />,
      document.body.appendChild(
        document.createElement('div')
      )
    )
});
