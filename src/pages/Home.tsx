import React, { useState, useEffect, useContext } from "react";
import { getBook, getBookById } from "../api";
//css
import styles from "./Home.module.scss";

//components
import Book from "../components/Book";
import Navbar from "../components/Navbar";
import BookDetailModal from "../components/BookDetailModal";
import { FavoriteContext } from "../context/FavoriteContext";
import { Pagination } from "../components/Pagination";

const Home = () => {
  const collectionKey = "bColl";
  const [books, setBooks] = useState<any[]>([]);
  const [bookDetail, setbookDetail] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<string>("Livros");

  const { bookCollection, setBookinCollection, loadBooksinCollection } =
    useContext(FavoriteContext);

  const onSearch = (title: string) => {
    fetchBooks(title);
  };

  const fetchBooks = async (title: string) => {
    setLoading(true);
    setPage("Livros");
    try {
      const data = await getBook(title);
      setBooks(data.items);
      setLoading(false);
    } catch (error: any) {
      console.log("fetchBooks", error.message);
      setLoading(false);
    }
  };
  const loadBooks = () => {
    const storedBooks = window.localStorage.getItem(collectionKey);
    const books = storedBooks ? JSON.parse(storedBooks) : null;
    loadBooksinCollection(books);
  };

  useEffect(() => {
    fetchBooks("harry Potter");
    if (window.localStorage.getItem(collectionKey)) {
      loadBooks();
    }
  }, []);

  async function fetchCollectionBooks(books: string[]) {
    setLoading(true);
    setPage("Coleção");
    try {
      const promises = books.map(async (book) => {
        return getBookById(book);
      });
      const result = await Promise.all(promises);

      setBooks(result);
      setLoading(false);
    } catch (error: any) {
      console.log("fetchCollectionBooks", error.message);
      setLoading(false);
    }
  }

  const addBookToCollection = (id: string) => {
    const updatedList = [...bookCollection, id];
    setBookinCollection(id);
    window.localStorage.setItem(collectionKey, JSON.stringify(updatedList));
  };

  const openModal = () => {
    const modal = document.querySelector("#Modal");
    modal!.classList.remove("hide");
  };
  const showBookDetails = (book: any): void => {
    setbookDetail(book);

    openModal();
  };

  return (
    <main>
      <BookDetailModal
        book={bookDetail}
        setBookinCollection={addBookToCollection}
      />
      <Navbar
        onSearch={onSearch}
        fetchBooks={fetchBooks}
        fetchCollectionBooks={fetchCollectionBooks}
      />
      <h1 className={styles.title}>{page}</h1>
      <div className={styles.container}>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          books.length > 0 &&
          books.map((book, index) => {
            return (
              <Book key={index} book={book} showBookDetails={showBookDetails} />
            );
          })
        )}
      </div>
      <Pagination />
    </main>
  );
};

export default Home;
