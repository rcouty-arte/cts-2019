import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StopSearch from './pages/StopSearch';

function App() {
  return (
    <Router>
      <Route exact path="/" component={StopSearch} />
    </Router>
  );
}

export default App;
