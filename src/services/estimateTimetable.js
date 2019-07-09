import client from './client';

const estimateTimetable = async ($params) => (
  await client('estimate-timetable', $params)
);

export default estimateTimetable;