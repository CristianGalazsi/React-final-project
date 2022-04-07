import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// import React from 'react';
// import * as ReactDOMClient from 'react-dom';
// import App from './App';

// const container = document.getElementById('root');
// const root = ReactDOMClient.createRoot(container);
// root.render(<App />)