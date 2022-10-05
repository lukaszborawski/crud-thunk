import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './features/users/UsersList/UsersList'
import PostsList from './features/posts/PostsList/PostsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/user/:id' element={<PostsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
