import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import AppLayout from './AppLayout';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <AppLayout />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
