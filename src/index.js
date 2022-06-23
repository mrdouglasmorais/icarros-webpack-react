import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// const root = ReactDom.createRoot(document.getElementById('main'));
// root.render(<App/>);

ReactDom.render(
  <App/>,
  document.getElementById('main')
)
