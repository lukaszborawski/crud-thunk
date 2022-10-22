import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersList from './features/users/UsersList/UsersList';
import PostsList from './features/posts/PostsList/PostsList';
import AddPost from './features/posts/AddPost/AddPost';
import EditPost from './features/posts/EditPost/EditPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/user/:id' element={<PostsList />} />
        <Route path='/addPost/:id' element={<AddPost />} />
        <Route path='/editPost/:postId' element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
