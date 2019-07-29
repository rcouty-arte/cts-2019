import { vehicleModeFilter }  from "../actions/vehicleModeFilter";
import { connect } from "react-redux";

const mapStateToProps = ( { VehicleMode }  ) => ( { VehicleMode } ); 

const mapDispatchToProps = {
    vehicleModeFilter,
};

export default (options) => (connect(mapStateToProps,mapDispatchToProps,null,options));