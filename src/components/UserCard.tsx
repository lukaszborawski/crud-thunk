import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface UserProfile {
  id: number;
  name: string;
}

const UserCard = ({ id, name }: UserProfile) => {
  return (
    <Link to={`/user/${id}`}>
      <Wrapper>
        <Detail>
          Name:
          <Value>{name}</Value>
        </Detail>
      </Wrapper>
    </Link>
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
  margin-left: 5px;
`;

