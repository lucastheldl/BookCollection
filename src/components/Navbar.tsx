import React, { useContext } from "react";
//css
import { FavoriteContext } from "../context/FavoriteContext";
import styles from "./Navbar.module.scss";
//components
import SearchBar from "./SearchBar";
import { List } from "@phosphor-icons/react";

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
          <h1>
            COLEÇÃO
            <br /> DE LIVROS
          </h1>
          <SearchBar onSearch={onSearch} />
          <ul>
            {/* <li>
              <button onClick={() => fetchBooks("Javascript")}>Livros</button>
            </li>
            <li>
              <button onClick={() => fetchCollectionBooks(bookCollection)}>
                Coleção
              </button>
            </li> */}
            <li>
              <button>
                <List size={32} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
