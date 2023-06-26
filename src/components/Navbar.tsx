import React, { useContext } from "react";
//css
import { FavoriteContext } from "../context/FavoriteContext";
import styles from "./Navbar.module.scss";
//components
import SearchBar from "./SearchBar";

type Props = {
  onSearch(title: string): void;
  fetchCollectionBooks: (books: string[]) => void;
  fetchBooks: (title: string) => void;
};

const Navbar = ({ onSearch, fetchBooks, fetchCollectionBooks }: Props) => {
  const { bookCollection } = useContext(FavoriteContext);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <h1>Book's Collection</h1>
          <ul>
            <li>
              <button onClick={() => fetchBooks("harry potter")}>Home</button>
            </li>
            <li>
              <button onClick={() => fetchCollectionBooks(bookCollection)}>
                Coleção
              </button>
            </li>
          </ul>
        </div>

        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Navbar;
