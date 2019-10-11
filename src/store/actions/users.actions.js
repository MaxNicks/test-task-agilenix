import { REQUESTED_USERS, REQUESTED_USERS_FAILED, USERS_ADD_FROM_SERVER, USER_FETCH_REQUESTED } from '../../constants/users.constants';

export const loadUsersFromServer = users => ({
    type: USERS_ADD_FROM_SERVER,
    users
});

export const userFetchRequested = () => ({
    type: USER_FETCH_REQUESTED
});

export const requestUsers = () => ({
    type: REQUESTED_USERS
});

export const requestUsersFailed = () => ({
    type: REQUESTED_USERS_FAILED
});

