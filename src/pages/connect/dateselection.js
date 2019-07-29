import { dateSelection }  from "../actions/dateselection";
import { connect } from "react-redux";

const mapStateToProps = ({date, stop}) => ({date, stop}); 

const mapDispatchToProps = {
    dateSelection,
};

export default (options) => (connect(mapStateToProps,mapDispatchToProps,null,options));