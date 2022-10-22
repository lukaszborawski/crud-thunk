import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { selectAllPosts, postDelete } from "../postsSlice";
import { useAppSelector, useAppDispatch } from "../../../store/typedHooks";
import PostCard from "../../../components/PostCard";


const PostsList = () => {

  const { id } = useParams();
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectAllPosts);

  const postsByUser = posts.filter(post => post.userId === Number(id));

  const handleDelete = (id: number) => {
    dispatch(postDelete({ id }));
  };

  return (
    <Wrapper>
      <Link to={`/addPost/${id}`}>
        <button>Add Post</button>
      </Link>
      {postsByUser.map(
        ({ id, title }) => (
          <div key={id}>
            <PostCard
              id={id}
              title={title}
            />
            <button onClick={() => handleDelete(id)}>delete</button>
            <Link to={`/editPost/${id}`}>
              <button>edit</button>
            </Link>
          </div>
        )
      )
      }
    </Wrapper>
  )
}

export default PostsList

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;