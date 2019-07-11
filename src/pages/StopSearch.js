import React, { useContext, useEffect } from 'react';
import { StopSearchContext } from '../providers/stopSearchProvider';
import linesDiscovery from '../services/linesDiscovery';

const StopSearch = () => {
  //let lines = linesDiscovery();
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

export default StopSearch;
