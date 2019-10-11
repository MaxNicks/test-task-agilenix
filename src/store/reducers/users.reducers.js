import {
    USERS_ADD_FROM_SERVER,
    REQUESTED_USERS,
    REQUESTED_USERS_FAILED
} from '../../constants/users.constants';

const defaultState = {
    usersDate: [],
    isLoading: false,
    isError: false
};

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USERS_ADD_FROM_SERVER: {
            return {
                ...state,
                usersDate: [
                    ...action.users
                ],
                isLoading: false
            };
        }

        case REQUESTED_USERS: {
            return {
                ...state,
                isLoading: true
            };
        }

        case REQUESTED_USERS_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true
            };
        }

       default:
            return state;
    }
};
