import {takeEvery, call, put } from 'redux-saga/effects';
import {DATA_REQUESTED, DATA_LOADED} from '../constants/action_types';

export default function* watcherSaga(){
  yield takeEvery(DATA_REQUESTED, workerSaga);
};

function* workerSaga(action){
  const payload = yield call(getData, action.payload.url);
  try{
    yield put({type:DATA_LOADED,payload});
  }catch (e){
    yield put({type:"API_ERROR", payload});
  }
};

function getData(url){
  return fetch(url).then(res => res.json()).catch(err => console.log(err));
};
