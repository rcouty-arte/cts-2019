import React, { useContext, useEffect } from 'react';
import { StopSearchContext, StopSearchProvider } from '../providers/stopSearchProvider';
import linesDiscovery from '../services/linesDiscovery';
import estimatedTimetable from '../services/estimatedTimetable';

import VehicleModeFilter from './StopSearch/VehicleModeFilter';
import LineSelection from './StopSearch/LineSelection';
import StopSelection from './StopSearch/StopSelection';

const StopSearchPage = () => {
  const { dispatch } = useContext(StopSearchContext);

  useEffect(() => {
    linesDiscovery({
      dispatch: dispatch,
      type: 'setLines',
      params: {}
    });

    estimatedTimetable({
      dispatch: dispatch,
      type: 'setStops',
      params: {}
    });
  }, [dispatch]);

  return (
    <div>
      <VehicleModeFilter />
      <LineSelection />
      <StopSelection />
    </div>
  );
}

const StopSearch = () => {
  const StopSearchInitialState = {
    lines: [],
    stops: [],
    VehicleMode: {
      bus: true,
      tram: true
    },
    line: null,
    stop: null
  };

  return (
    <StopSearchProvider initialState={StopSearchInitialState}>
      <StopSearchPage />
    </StopSearchProvider>
  );
}

export default StopSearch;
