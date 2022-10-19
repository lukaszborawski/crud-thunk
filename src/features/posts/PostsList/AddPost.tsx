import { useState, ChangeEvent } from "react";
import { nanoid } from '@reduxjs/toolkit';
import { useParams } from 'react-router-dom'
import Modal from "../../../components/Modal"
import { useAppDispatch } from "../../../store/typedHooks";
import { postAdd } from "../postsSlice";

const AddPost = () => {

  const { id } = useParams()
  const dispatch = useAppDispatch();

  const [showModal, setShowModal] = useState(true);
  const [title, setTitle] = useState('')

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
    setShowModal(false);
  };

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
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