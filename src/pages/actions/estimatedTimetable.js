import client from '../../services/client';

const estimatedTimetable = ($params) => async (dispatch) => {
  console.log($params);
  const data = await client('estimated-timetable', $params);
  dispatch({type: 'setStops', data: data});
};
export { estimatedTimetable };