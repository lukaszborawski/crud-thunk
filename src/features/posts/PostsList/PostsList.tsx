import styled from "styled-components";
import { selectAllPosts } from "../postsSlice";
import { useAppSelector } from "../../../store/typedHooks";
import { useParams } from "react-router-dom";
import PostCard from "../../../components/PostCard";
import { useAppDispatch } from "../../../store/typedHooks";
import { postDelete } from "../postsSlice";

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
      {postsByUser.map(
        ({ id, title }) => (
          <>
            <PostCard
              key={id}
              id={id}
              title={title}
            />
            <button onClick={() => handleDelete(id)}>delete</button>
          </>
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