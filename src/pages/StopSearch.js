import React, { useContext, useEffect } from 'react';
import { StopSearchContext, StopSearchProvider } from '../providers/stopSearchProvider';
import linesDiscovery from '../services/linesDiscovery';

const StopSearchPage = () => {
  const { state: { lines }, dispatch } = useContext(StopSearchContext);

  useEffect(() => {
    linesDiscovery({
      dispatch: dispatch,
      type: 'loadLines',
      params: {}
    });
  }, []);

  console.log(lines);

  return (
    <div>
      stop search
    </div>
  );
}

const StopSearch = () => {
  const StopSearchInitialState = {
    lines: []
  };

  return (
    <StopSearchProvider initialState={StopSearchInitialState}>
      <StopSearchPage />
    </StopSearchProvider>
  );
}

export default StopSearch;
