import { stopMonitoring }  from "../actions/stopMonitoring";
import { connect } from "react-redux";
import { StopSearchContext } from "../../providers/stopSearchProvider";
import SearchButton from "../StopSearch/SearchButton";

const mapStateToProps = ( { stop, date, line, maxStopArrivals } ) => ( { 
    value: {
        params: {
            MonitoringRef: stop,
            LineRef: line,
            StartTime: date,
            MaximumStopVisits: maxStopArrivals
        }
    },
    visible: stop !== null,
}); 

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (...params) => (stopMonitoring)(...params)(dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps,null,{context: StopSearchContext})(SearchButton);