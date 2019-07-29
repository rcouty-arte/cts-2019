import client from '../../services/client';

const linesDiscovery = ($params) => async (dispatch) => {
  const data = await client('lines-discovery', $params);
  dispatch({type: 'setLines', data: data});
};

export { linesDiscovery };