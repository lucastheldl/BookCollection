import React, { useContext } from "react";
//css
import { FavoriteContext } from "../context/FavoriteContext";
import styles from "./Navbar.module.scss";
//components
import SearchBar from "./SearchBar";
import { getBook } from "../api";

type Props = {
  onSearch(title: string): void;
  setCollectionBooks: (data: any) => void;
};

const Navbar = ({ onSearch, setCollectionBooks }: Props) => {
  const { bookCollection } = useContext(FavoriteContext);

  async function fetchCollectionBooks() {
    const promises = bookCollection.map(async (book) => {
      return getBook(book);
    });
    const result = await Promise.all(promises);

    setCollectionBooks(result);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <h1>Book's Collection</h1>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button onClick={fetchCollectionBooks}>Coleção</button>
            </li>
          </ul>
        </div>

        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Navbar;
