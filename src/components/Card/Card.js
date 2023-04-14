import styles from "./Card.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/store";
const Card = (props) => {
  console.log(props.isFavorite);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(props.id);
    dispatch(toggleFavorite(props.id));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <button
        onClick={() => handleSubmit()}
        className={clsx(
          styles.button,
          props.isFavorite ? styles.favorite : undefined
        )}
      >
        <i className="fa fa-star-o"></i>
      </button>
    </li>
  );
};

export default Card;
