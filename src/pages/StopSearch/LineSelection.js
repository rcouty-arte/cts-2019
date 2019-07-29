import React from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import Select from 'react-select';
import { FormLabel } from '@material-ui/core';
import connect from '../connect/lineSelection';

const LineSelection = ({ lines, line, VehicleMode, lineSelection }) => {
  const options = lines.filter((line) => {
    if (VehicleMode[line.RouteType]) {
      return true;
    }
    return false;
  }).map(line => ({
    value: line.LineRef,
    label: line.RouteType+' '+line.LineRef+ ' - '+line.LineName
  }));

  const value = options.find(element => {
    return element.value === line;
  });

  const handleChange = selected => {
    lineSelection(selected.value);
  };

  return (
    <div>
      <FormLabel component="legend">Ligne</FormLabel>
      <Select
        value={value}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}

export default connect({context: StopSearchContext})(LineSelection);
