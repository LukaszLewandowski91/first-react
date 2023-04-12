import styles from "./List.module.scss";
import Column from "../Column/Column";
import ColumnForm from "../ColumnForm/ColumnForm";
import { useSelector } from "react-redux";
import SearchForm from "../SearchForm/SearchForm";
import { getListById } from "../../redux/store";
import { getColumnsByList } from "../../redux/store";
import { useParams } from "react-router-dom";
const List = () => {
  const { listId } = useParams();
  const listData = useSelector((state) => getListById(state, listId));
  const columns = useSelector((state) => getColumnsByList(state, listId));
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {listData.title}
          <span>soon</span>
        </h1>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );
};

export default List;

//Things to do    Interesting things I want to check out
