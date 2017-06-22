import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const node = <Root />
    ReactDOM.render(
      node,
      document.body.appendChild(
        document.createElement('div')
      )
    )
});
