import {ADD_USER} from '../constants/action_types';
import {DATA_REQUESTED} from '../constants/action_types';

export function addUser(payload){
  return {type: ADD_USER, payload};
};
