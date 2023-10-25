import React, { useContext, useState } from "react";
//css
import { FavoriteContext } from "../context/FavoriteContext";
import styles from "./Navbar.module.scss";
//components
import SearchBar from "./SearchBar";
import { List } from "@phosphor-icons/react";
import { SideBar } from "./SideBar";

type Props = {
  onSearch(title: string): void;
  fetchCollectionBooks: (books: string[]) => void;
  fetchBooks: (title: string) => void;
};

const Navbar = ({ onSearch, fetchBooks, fetchCollectionBooks }: Props) => {
  const { bookCollection } = useContext(FavoriteContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleBurguerMenu() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <SideBar
          isModalOpen={isModalOpen}
          toggleBurguerMenu={toggleBurguerMenu}
        />
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
              <button onClick={toggleBurguerMenu}>
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
