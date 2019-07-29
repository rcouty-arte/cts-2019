import React from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import { FormControlLabel, FormLabel, Checkbox } from '@material-ui/core';
import connect from '../connect/vehicleModeFilter'

const VehicleModeFilter = ({ VehicleMode, vehicleModeFilter }) => {
  const handleChange = mode => event => {
    vehicleModeFilter(mode, event.target.checked)
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

export default connect({context: StopSearchContext})(VehicleModeFilter);
