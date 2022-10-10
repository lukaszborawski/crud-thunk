import { selectAllPosts } from "../postsSlice";
import { useAppSelector } from "../../../store/typedHooks";
import { useParams } from "react-router-dom";
import PostCard from "../../../components/PostCard";

const PostsList = () => {

  const { id } = useParams();
  const posts = useAppSelector(selectAllPosts);
  const postsByUser = posts.filter(post => post.userId === Number(id));


  return (
    <div>
      {postsByUser.map(
        ({ id, title }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
          />
        )
      )
      }
    </div>
  )
}

export default PostsList