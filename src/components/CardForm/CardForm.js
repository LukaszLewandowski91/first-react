import { useState } from "react";
import styles from "./CardForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

const CardForm = (props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action({ title: title }, props.columnId, props.addCard);
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
