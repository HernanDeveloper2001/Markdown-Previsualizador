import React from 'react';
import ReactDOM from 'react-dom/client';
import Markdown from './Markdown.jsx';
import { store } from './app/store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Markdown />
    </Provider>
  </React.StrictMode>,
)
