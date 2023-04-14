import { useState } from "react";
import styles from "./CardForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/store";

const CardForm = (props) => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId: props.columnId, isFavorite: false }));
    setTitle("");
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <label>Title:</label>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
