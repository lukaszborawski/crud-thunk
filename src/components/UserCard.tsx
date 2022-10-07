import React from 'react';
import styled from 'styled-components';

interface UserProfile {
  name: string;
}

const UserCard = ({ name }: UserProfile) => {
  return (
    <Wrapper>
      <Detail>
        Name:
        <Value>{name}</Value>
      </Detail>
    </Wrapper>
  )
}

export default UserCard;

const Wrapper = styled.div`
  width: 350px;
  padding: 15px 10px;
  color: black;
  border: 1px solid black;
`;

const Detail = styled.div`
`;

const Value = styled.span`
`;

