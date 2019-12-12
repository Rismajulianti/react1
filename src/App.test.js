import React from 'react';
import ReactDOM from 'react-dom';
import Latihan from './Latihan';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Latihan />, div);
  ReactDOM.unmountComponentAtNode(div);
});
