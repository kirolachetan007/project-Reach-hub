import logo from './logo.svg';
import './App.css';
import LichessAPI from 'components/fetchData/LichessAPI';




import React from 'react';
import ExchangeRate from './components/ExchangeRateUI';

function App() {
  return (
    <div className="App">
      <ExchangeRate />
    </div>
  );
}

export default App;