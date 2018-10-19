import { zipObject } from 'lodash';

const ACTION_TYPES = [
  'RECEIVE_MOVIES_LIST_RESPONSE',
  'RECEIVE_MOVIE_DETAILS_RESPONSE'
];

export default zipObject(ACTION_TYPES, ACTION_TYPES);