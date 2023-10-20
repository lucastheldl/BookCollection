//css
import styles from "./Book.module.scss";
//image
import logo from "../assets/book.png";

type Props = {
  book: any;
  showBookDetails(books: any): void;
};

const Book = ({ book, showBookDetails }: Props) => {
  let thumb = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.smallThumbnail
    : logo;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={thumb} loading="lazy" alt="" />
      </div>
      <h3>{book.volumeInfo.title}</h3>
      <button
        className={styles.detail_btn}
        onClick={() => {
          showBookDetails(book);
        }}
        disabled={!book.volumeInfo.description}
      >
        Visualizar descrição
      </button>
    </div>
  );
};

export default Book;
