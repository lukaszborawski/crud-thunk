import styled from 'styled-components';
import { useAppSelector } from '../../../store/typedHooks'
import { selectAllUsers } from '../usersSlice';
import UserCard from '../../../components/UserCard';

const UsersList = () => {

  const users = useAppSelector(selectAllUsers);


  return (
    <Wrapper>
      {users.map(
        ({ id, name }) => (
          <UserCard
            key={id}
            id={id}
            name={name}
          />
        )
      )
      }
    </Wrapper>
  )
}

export default UsersList

const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  gap: 20px;
`;