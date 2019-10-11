import { call, put, takeLatest, delay } from 'redux-saga/effects'

import config from '../../config';
import { USER_FETCH_REQUESTED } from '../../constants/users.constants';
import { get } from '../../server/api';
import { loadUsersFromServer, requestUsers, requestUsersFailed} from '../actions/users.actions';

function* fetchUser() {
    try {
        yield put(requestUsers());
        yield delay(config.server_delay);
        const data = yield call(get, config.server_url);

        let arr = [];
        for (let i = 0; i < data.items.length; i++) {
            const dataUser = yield call(get, data.items[i].url);
            arr.push(dataUser);
        }
        yield put(loadUsersFromServer(arr));
    } catch (e) {
        yield put(requestUsersFailed());
    }
}

function* watchLoadUsersSaga() {
    yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}

export default watchLoadUsersSaga;
