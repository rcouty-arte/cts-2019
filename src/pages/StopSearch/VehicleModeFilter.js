import React, { useContext } from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import { FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';

const VehicleModeFilter = () => {
  const { state: { VehicleMode }, dispatch } = useContext(StopSearchContext);

  const handleChange = mode => event => {
    dispatch({type: 'VehicleModeFilter', data: {mode: mode, checked: event.target.checked}});
  };

  return (
    <div>
      <FormLabel component="legend">Type de transport</FormLabel>
      <FormControlLabel
        control={
          <Checkbox
            checked={VehicleMode.bus}
            onChange={handleChange('bus')}
            value="bus"
            color="primary"
          />
        }
        label="Bus"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={VehicleMode.tram}
            onChange={handleChange('tram')}
            value="tram"
            color="primary"
          />
        }
        label="Tram"
      />
    </div>
  );
}

export default VehicleModeFilter;
