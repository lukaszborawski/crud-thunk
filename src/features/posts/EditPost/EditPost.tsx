import { useState, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Modal from "../../../components/Modal";
import { useAppDispatch } from "../../../store/typedHooks";
import { postEdit } from "../postsSlice";

const EditPost = () => {

  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)


  const handleEdit = () => {
    dispatch(
      postEdit({
        id: Number(postId),
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
          onClick={handleEdit}
        >
          Save
        </button>
      </form>

    </Modal>
  )
}

export default EditPost