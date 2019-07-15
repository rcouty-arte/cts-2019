import React, { useContext } from 'react';
import { StopSearchContext } from '../../providers/stopSearchProvider';
import MUIDataTable from "mui-datatables";

const DateSelection = () => {
  const { state: { results } } = useContext(StopSearchContext);

  const options = {

  };

  const columns = [
    "Ligne",
    "Arrêt",
    "Destination",
    "Temps réel",
    "Arrivée",
    "Départ",
    "Arrivée dans"
  ];

  const data = results.map((result) => {
    let element = [
      result.VehicleMode+' '+result.LineRef,
      result.StopPointName,
      result.DestinationName,
      result.IsRealTime === true ? "Oui" : "Non",
      result.ExpectedArrivalTime,
      result.ExpectedDepartureTime,
      ''
    ];

    return element;
  });

  if (results.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      <MUIDataTable
        title={"Liste des horaires"}
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default DateSelection;
