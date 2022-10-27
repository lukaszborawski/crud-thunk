import styled from 'styled-components';
import { useAppSelector } from '../../../store/typedHooks';
import UserCard from '../../../components/UserCard';
import { RootState } from '../../../store/store';

const UsersList = () => {

  const { data } = useAppSelector((state: RootState) => state.users);


  return (
    <Wrapper>
      {data.map(
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