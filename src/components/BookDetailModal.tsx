import React from "react";
//scss
import styles from "./BookDetailModal.module.scss";

type Props = {
  book: any;
};

const BookDetailModal = ({ book }: Props) => {
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
            <button onClick={closeModal} className={styles.btn_close}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetailModal;
