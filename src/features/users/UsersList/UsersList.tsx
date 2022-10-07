import { useAppSelector } from '../../../store/typedHooks'
import { selectAllUsers } from '../usersSlice';
import UserCard from '../../../components/UserCard';

const UsersList = () => {

  const users = useAppSelector(selectAllUsers);


  return (
    <div>
      {users.map(
        ({ id, name }) => (
          <UserCard
            key={id}
            name={name}
          />
        )
      )
      }
    </div>
  )
}

export default UsersList