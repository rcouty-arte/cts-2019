import React from 'react';
//import linesDiscovery from '../services/linesDiscovery';
import { StopSearchProvider } from '../providers/stopSearchProvider';

const initialState = {
  data: []
};

const StopSearch = () => {
  //let lines = linesDiscovery();

  return (
    <StopSearchProvider initialState={initialState}>
      <div>
        stop search
      </div>
    </StopSearchProvider>
  );
}

export default StopSearch;
