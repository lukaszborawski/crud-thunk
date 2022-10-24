import { useState, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Modal from "../../../components/Modal";
import { useAppDispatch, useAppSelector } from "../../../store/typedHooks";
import { postAdd, selectAllPosts } from "../postsSlice";

const AddPost = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const posts = useAppSelector(selectAllPosts);

  const postsAmount = posts.filter(post => post.userId === Number(id)).length;

  const [title, setTitle] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)


  const handleAdd = () => {
    dispatch(
      postAdd({
        userId: Number(id),
        id: postsAmount + 1,
        title,
      })
    );
    setTitle("");
    navigate(-1)
  };

  return (
    <Modal>
      <form>
        <label htmlFor="titlePost">Title:</label>
        <input
          type="text"
          id="titlePost"
          name="titlePost"
          value={title}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleAdd}
        >
          Save
        </button>
      </form>
    </Modal>
  )
}

export default AddPost