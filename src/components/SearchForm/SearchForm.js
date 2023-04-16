import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { filterString } from "../../redux/searchStringRedux";

const SearchForm = () => {
  const [searchString, setSearchString] = useState(
    useSelector((state) => state.searchString)
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterString(searchString));
  };
  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <TextInput
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="Search..."
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
