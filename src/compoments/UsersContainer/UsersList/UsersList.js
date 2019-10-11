import React, { PureComponent } from 'react';
import styled from 'styled-components';

import CurrentUsersListItem from './CurrentUsersListItem';

class UsersList extends PureComponent {

    renderItem = () => {
        const { users } = this.props;
        return users.map( item =>
            <CurrentUsersListItem
                key={item.id}
                item={item}
            />
        );
    };

    render() {
        return (
            <Ul>
                {this.renderItem()}
            </Ul>
        );
    }
}

export default UsersList;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
