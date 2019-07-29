import React from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import { FormLabel } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import locale from 'date-fns/locale/fr';
import {
  MuiPickersUtilsProvider,
  TimePicker
} from '@material-ui/pickers';
import connect from '../connect/dateselection';

const DateSelection = ({ date, stop, dateSelection }) => {
  const handleChange = date => {
    dateSelection(date);
  };

  if (stop === null) {
    return <div></div>;
  }

  return (
    <div>
      <FormLabel component="legend">Horaire</FormLabel>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
        <TimePicker
          margin="normal"
          id="mui-pickers-time"
          ampm={false}
          variant="inline"
          value={date}
          onChange={handleChange}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default connect({context: StopSearchContext})(DateSelection);
