import { connect } from "react-redux";

const mapStateToProps = ( { results } ) => ( { results }); 

export default (options) => (connect(mapStateToProps,null,null,options));