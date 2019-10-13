import { call, put, takeLatest, delay, all } from 'redux-saga/effects'

import config from '../../config';
import { USER_FETCH_REQUESTED } from '../../constants/users.constants';
import { get } from '../../server/api';
import { loadUsersFromServer, requestUsers, requestUsersFailed} from '../actions/users.actions';

function* fetchUser() {
    try {
        yield put(requestUsers());
        yield delay(config.server_delay);

        const data = yield call(get, config.server_url);
        const userDate = yield all(data.items.map(item => call(get, item.url)));

        yield put(loadUsersFromServer(userDate));
    } catch (e) {
        yield put(requestUsersFailed());
    }
}

function* watchLoadUsersSaga() {
    yield takeLatest(USER_FETCH_REQUESTED, fetchUser);
}

export default watchLoadUsersSaga;
