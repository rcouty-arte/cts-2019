import { lineSelection }  from "../actions/lineSelection";
import { connect } from "react-redux";

const mapStateToProps = ( { lines, line, VehicleMode } ) => ( { lines, line, VehicleMode }); 

const mapDispatchToProps = {
    lineSelection,
};

export default (options) => (connect(mapStateToProps,mapDispatchToProps,null,options));