import React, { useContext, useState } from "react";
//css
import { FavoriteContext } from "../context/FavoriteContext";
import styles from "./Navbar.module.scss";
//components
import SearchBar from "./SearchBar";
import { List } from "@phosphor-icons/react";
import { SideBar } from "./SideBar";
import { getBookById } from "../api";

type Props = {
  onSearch(title: string): void;
  fetchBooks: (title: string) => void;
};

const Navbar = ({ onSearch, fetchBooks }: Props) => {
  const { bookCollection } = useContext(FavoriteContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [collectionBooks, setCollectionBooks] = useState<any[]>([]);

  function toggleBurguerMenu() {
    setIsModalOpen(!isModalOpen);
    fetchCollectionBooks(bookCollection);
  }

  async function fetchCollectionBooks(books: string[]) {
    //setCurrentPages(1);
    //setPage("Coleção");
    try {
      const promises = books.map(async (book) => {
        return getBookById(book);
      });
      const result = await Promise.all(promises);
      //setTotalPage(Math.ceil(result.length / 40));
      setCollectionBooks(result);
      //setLoading(false);
    } catch (error: any) {
      console.log("fetchCollectionBooks", error.message);
      //setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <SideBar
          isModalOpen={isModalOpen}
          toggleBurguerMenu={toggleBurguerMenu}
          collectionBooks={collectionBooks}
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
