import { applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { usersReducer } from "./reducers/users.reducers";
import { createStore } from  "redux";
import watchLoadUsersSaga from './sagas/users.saga'


const sagaMiddleware = createSagaMiddleware();

export default createStore(
    usersReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(watchLoadUsersSaga);
