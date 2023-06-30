import React from "react";
//css
import styles from "./Book.module.scss";

type Props = {
  book: any;
  showBookDetails(books: any): void;
};

const Book = ({ book, showBookDetails }: Props) => {
  let thumb =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <div className={styles.cardContainer}>
      <img src={thumb} loading="lazy" />
      <h3>{book.volumeInfo.title}</h3>
      <button
        className={styles.detail_btn}
        onClick={() => {
          showBookDetails(book);
        }}
      >
        Detalhes
      </button>
    </div>
  );
};

export default Book;
