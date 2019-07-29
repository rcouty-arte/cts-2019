import { stopSelection }  from "../actions/stopSelection";
import { connect } from "react-redux";

const mapStateToProps = ( { stops, stop, line }  ) => ( { stops, stop, line } ); 

const mapDispatchToProps = {
    stopSelection,
};

export default (options) => (connect(mapStateToProps,mapDispatchToProps,null,options));