import React, { Component } from 'react';
import styled from 'styled-components';

import { Location } from 'styled-icons/evil/Location'
import { Email } from 'styled-icons/material/Email'

class CurrentUsersListItem extends Component {

    render() {
        const { item } = this.props;

        return (
            <Item>
                <WrapperRow>
                    <WrapperAvatar>
                        <Avatar src={item.avatar_url} alt="avatar"/>
                    </WrapperAvatar>
                    <WrapperCol>
                        <WrapperRow>
                            <TextNickname href={item.html_url} target="_blank">{item.login}</TextNickname>
                            <TextFullname>{item.name}</TextFullname>
                        </WrapperRow>
                        <span>{item.bio}</span>
                        <WrapperRow>
                            <GrayLocation />
                            <TextBottom>{item.location}</TextBottom>
                            {item.email &&
                                <div>
                                    <GrayEmail />
                                    <TextBottom>{item.email}</TextBottom>
                                </div>
                            }
                        </WrapperRow>
                    </WrapperCol>
                </WrapperRow>
            </Item>

        );
    }
}

export default CurrentUsersListItem;

const Item = styled.li`
    border: 1px solid #ddd;
    margin-top: -1px;
    padding: 12px;
`;

const Avatar = styled.img`
     width: 25px
     height: 25px,
`;

const WrapperAvatar = styled.div`
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: start;
     margin-right: 10px
`;

const WrapperCol = styled.div`
     display: flex;
     flex-direction: column;
     align-items:  flex-start;
     justify-content: flex-start;
`;
const WrapperRow = styled.div`
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: flex-start;
`;
const TextBottom = styled.span`
     font-size: 12px;
     color: #586069;
     margin-right: 16px;
`;

const TextNickname = styled.a`
     color: #0366d6;
     text-decoration: none;
     margin-right: 4px;
`;

const TextFullname = styled.span`
     font-size: 16px;
     color: #586069;
`;

const GrayLocation = styled(Location)`
  color: #586069;
  width: 12px
  height: 12px,
`;

const GrayEmail = styled(Email)`
  color: #586069;
  width: 12px
  height: 12px,
`;
