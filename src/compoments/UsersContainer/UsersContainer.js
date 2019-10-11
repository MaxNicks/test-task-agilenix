import React, { PureComponent } from 'react';
import { connect } from "react-redux"

import LoadUserButton from './LoadUserButton/LoadUserButton'
import UserList from './UsersList/UsersList'
import { getDateIsError, getDateIsLoaded, getUsersDate } from '../../selectors/common';
import { userFetchRequested } from "../../store/actions/users.actions";

class UsersContainer extends PureComponent {
    render() {
        const { userFetchRequested, isLoading, isError, users } = this.props;
        return (
            <div>
                <LoadUserButton
                    userFetchRequested={userFetchRequested}
                    isLoading={isLoading}
                    isError={isError}
                />
                <UserList
                    users={users}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: getDateIsLoaded(state),
    isError: getDateIsError(state),
    users: getUsersDate(state)
});

const mapDispatchToProps = {
    userFetchRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
