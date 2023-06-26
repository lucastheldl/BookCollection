import React, { useContext } from "react";
//scss
import styles from "./BookDetailModal.module.scss";
import { BookmarkSimple } from "@phosphor-icons/react";
import { FavoriteContext } from "../context/FavoriteContext";

type Props = {
  book: any;
};

const BookDetailModal = ({ book }: Props) => {
  const { bookCollection, setBookinCollection } = useContext(FavoriteContext);

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#Modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="Modal" className="hide">
      {book && (
        <div className={styles.fade}>
          <div className={styles.container}>
            <h2>{book.volumeInfo.title}</h2>
            <div className={styles.option_container}>
              <button onClick={closeModal} className={styles.btn_close}>
                Fechar
              </button>
              <button
                onClick={() => setBookinCollection(book.id)}
                className={styles.btn_bookmark}
              >
                {bookCollection.includes(book.id) ? (
                  <BookmarkSimple weight="fill" size={28} />
                ) : (
                  <BookmarkSimple size={28} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailModal;
