import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from '../reducers/index';
import {forbiddenNamesMiddleware } from "../middleware/index";
import createSagaMiddleWare from "redux-saga";
import apiSaga from "../sagas/api-sagas";

const initialiseSagaMiddleware = createSagaMiddleWare();
const storeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  storeEnhancer(
    applyMiddleware(forbiddenNamesMiddleware,initialiseSagaMiddleware))
  );

initialiseSagaMiddleware.run(apiSaga);

export default store;
