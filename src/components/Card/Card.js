import styles from "./Card.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/cardsRedux";
import { removeCard } from "../../redux/cardsRedux";

const Card = (props) => {
  console.log(props.isFavorite);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(props.id);
    dispatch(toggleFavorite(props.id));
  };

  const removesCard = () => {
    console.log("id do usuniecia", props.id);
    dispatch(removeCard(props.id));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          onClick={() => handleSubmit()}
          className={clsx(
            styles.button,
            props.isFavorite ? styles.favorite : undefined
          )}
        >
          <i className="fa fa-star-o"></i>
        </button>
        <button
          onClick={() => removesCard(props.id)}
          className={styles.buttonTrash}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default Card;
