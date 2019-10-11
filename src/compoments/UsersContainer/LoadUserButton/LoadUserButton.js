import React, { PureComponent } from 'react';
import styled from 'styled-components';

class UsersContainer extends PureComponent {
    render() {
        const { isLoading, userFetchRequested, isError } = this.props;
        return (
            <div>
                <Button
                    onClick={userFetchRequested}
                    disabled={isLoading}
                >
                    {isError && window.alert('Something went wrong:(')}
                    {isLoading ? 'Loading…' : 'Click to load'}
                </Button>
            </div>
        )
    }
}

export default UsersContainer

const Button = styled.button`  
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: black;
    border: 2px solid black;
`;
