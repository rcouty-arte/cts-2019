import { linesDiscovery }  from "../actions/linesDiscovery";
import { estimatedTimetable }  from "../actions/estimatedTimetable";

import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => ({
    linesDiscovery: (...params) => linesDiscovery(...params)(dispatch),
    estimatedTimetable: (...params) => estimatedTimetable(...params)(dispatch),
});

export default (options) => (connect(null,mapDispatchToProps,null,options));