import React, { useContext } from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import Select from 'react-select';

const LineSelection = () => {
  const { state: { lines, line, VehicleMode }, dispatch } = useContext(StopSearchContext);

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
    dispatch({type: 'LineSelection', data: {line: selected.value}});
  };

  return (
    <div>
      <Select
        value={value}
        onChange={handleChange}
        options={options}
      />
    </div>
  );
}

export default LineSelection;
