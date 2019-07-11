import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StopSearch from './pages/StopSearch';
import { StopSearchProvider } from './providers/stopSearchProvider';

function App() {
  const StopSearchInitialState = {
    lines: []
  };

  return (
      <Router>
        <StopSearchProvider initialState={StopSearchInitialState}>
          <Route exact path="/" component={StopSearch} />
        </StopSearchProvider>
      </Router>
  );
}

export default App;
