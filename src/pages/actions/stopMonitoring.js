import client from '../../services/client';

const stopMonitoring = ($params) => async (dispatch) => {
  const data = await client('stop-monitoring', $params)
  dispatch({type: 'Search', data: data});
};
export { stopMonitoring };