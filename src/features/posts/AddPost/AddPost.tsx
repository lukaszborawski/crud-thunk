import { useState, ChangeEvent } from "react";
import { nanoid } from '@reduxjs/toolkit';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from "../../../components/Modal";
import { useAppDispatch } from "../../../store/typedHooks";
import { postAdd } from "../postsSlice";

const AddPost = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)


  const handleAdd = () => {
    dispatch(
      postAdd({
        userId: Number(id),
        id: nanoid(),
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
          onChange={onTitleChanged}
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