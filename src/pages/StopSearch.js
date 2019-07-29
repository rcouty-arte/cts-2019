import React, { useEffect } from 'react';
import { StopSearchContext, StopSearchProvider } from '../providers/stopSearchProvider';

import VehicleModeFilter from './StopSearch/VehicleModeFilter';
import LineSelection from './StopSearch/LineSelection';
import StopSelection from './StopSearch/StopSelection';
import DateSelection from './connect/stopMonitoring';
import SearchButton from './StopSearch/SearchButton';
import Results from './StopSearch/Results';
import  connect from './connect/stopSearch';

let StopSearchPage = ({ linesDiscovery, estimatedTimetable }) => {

  useEffect(() => {
    linesDiscovery({
      params: {}
    });

    estimatedTimetable({
      params: {}
    });
  }, [ linesDiscovery, estimatedTimetable ]);

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
let StopSearchPageConnected = connect({context: StopSearchContext})(StopSearchPage);
const StopSearch = () => {

  return (
    <StopSearchProvider>
      <StopSearchPageConnected />
    </StopSearchProvider>
  );
}

export default StopSearch
