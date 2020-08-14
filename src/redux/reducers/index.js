import {ADD_USER, DATA_LOADED} from '../constants/action_types';

const initialState = {
  user: [],
  remoteUser:[]
};

export function rootReducer(state = initialState , action){
  if (action.type === ADD_USER){
    return Object.assign({},state,{
      user: state.user.concat(action.payload)
    });
  }

  if (action.type === DATA_LOADED){
    return Object.assign({},state,{
      remoteUser:state.remoteUser.concat(action.payload)
    });
  }

  return state;
};
