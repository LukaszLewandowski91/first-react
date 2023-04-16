import { useSelector } from "react-redux";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";
import { getFavoriteCards } from "../../redux/cardsRedux";
import Card from "../Card/Card";
import { Navigate } from "react-router-dom";

const Favorite = () => {
  const cards = useSelector((state) => getFavoriteCards(state));
  console.log(cards);
  if (cards.length === 0) return <Navigate to="/" />;
  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.container}>
        <div className={styles.column}>
          <ul className={styles.cards}>
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
                id={card.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Favorite;
