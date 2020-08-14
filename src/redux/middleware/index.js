import { ADD_USER } from '../constants/action_types';

const forbiddenName = ["Yasuo", "Yone"];

export function forbiddenNamesMiddleware({dispatch}){
  return function(next){
    return function(action){
      if(action.type === ADD_USER){
       const foundWord = forbiddenName.filter(word => action.payload.name.includes(word));


        if(foundWord.length){
          return dispatch({type: "FOUND_BAD_WORD"});
        }
      }
      return next(action);
    };
  };
}
