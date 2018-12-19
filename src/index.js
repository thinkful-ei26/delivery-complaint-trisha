import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store';
import ReportForm from './components/ReportForm';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <ReportForm />
  </Provider>, 
  document.getElementById('root')
);
