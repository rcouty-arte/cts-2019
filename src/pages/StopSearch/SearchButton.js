import React from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import connect from '../connect/stopMonitoring';
import Button from '@material-ui/core/Button';

const SearchButton = ({ value, onSubmit,  visible }) => {
  const handleChange = () => {
    onSubmit(value)
  };


  if (!visible) {
    return <div></div>;
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleChange}>
        Rechercher
      </Button>
    </div>
  );
}

export default SearchButton;
