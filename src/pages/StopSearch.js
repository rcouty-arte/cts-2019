import React, { useContext, useEffect } from 'react';
import { StopSearchContext, StopSearchProvider } from '../providers/stopSearchProvider';
import linesDiscovery from '../services/linesDiscovery';
import estimatedTimetable from '../services/estimatedTimetable';

import VehicleModeFilter from './StopSearch/VehicleModeFilter';
import LineSelection from './StopSearch/LineSelection';
import StopSelection from './StopSearch/StopSelection';
import DateSelection from './StopSearch/DateSelection';
import SearchButton from './StopSearch/SearchButton';
import Results from './StopSearch/Results';

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
      <DateSelection />
      <SearchButton />
      <Results />
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
    stop: null,
    date: new Date(),
    results: [],
    maxStopArrivals: 5
  };

  return (
    <StopSearchProvider initialState={StopSearchInitialState}>
      <StopSearchPage />
    </StopSearchProvider>
  );
}

export default StopSearch;
