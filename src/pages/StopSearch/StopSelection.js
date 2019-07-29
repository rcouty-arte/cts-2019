import React from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import Select from 'react-select';
import { FormLabel } from '@material-ui/core';
import connect from '../connect/stopSelection';

const StopSelection = ({ stops, stop, line, stopSelection }) => {
  const options = stops.filter((stop) => {
    if (stop.LineRef === line) {
      return true;
    }
    return false;
  }).map(stop => ({
    value: stop.StopPointRef,
    label: stop.VehicleMode+' '+stop.LineRef+' - '+stop.StopPointName+ ' => '+stop.DestinationName
  }));
  console.log(line);
  const value = options.find(element => {
    return element.value === stop;
  });

  const handleChange = selected => {
    stopSelection(selected.value);
  };

  let select = '';
  if (options.length > 0) {
    select =
      <div>
        <FormLabel component="legend">Arrêt</FormLabel>
        <Select
          value={value}
          onChange={handleChange}
          options={options}
        />
      </div>
  }

  return (
    <div>
      {select}
    </div>
  );
}

export default connect({context: StopSearchContext})(StopSelection);
