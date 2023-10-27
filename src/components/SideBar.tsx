import { CaretCircleDown, CaretCircleUp, X } from "@phosphor-icons/react";
import styles from "./SideBar.module.scss";
import { useState } from "react";

interface SideBarProps {
  isModalOpen: boolean;
  toggleBurguerMenu: () => void;
  collectionBooks: any[];
  showBookDetails(books: any): void;
}
export function SideBar({
  isModalOpen,
  toggleBurguerMenu,
  collectionBooks,
  showBookDetails,
}: SideBarProps) {
  const [isListOpen, setIsListOpen] = useState(false);

  function handleOpenList() {
    setIsListOpen(!isListOpen);
  }

  return (
    <div className={`${styles.container} ${isModalOpen ? styles.open : ""}`}>
      <button onClick={toggleBurguerMenu} className={styles.closeBtn}>
        <X size={32} />
      </button>
      <div>
        <button className={styles.listBtn} onClick={handleOpenList}>
          Favoritados
          {!isListOpen ? (
            <CaretCircleDown size={20} />
          ) : (
            <CaretCircleUp size={20} />
          )}
        </button>
        {isListOpen && (
          <ul className={styles.list}>
            {collectionBooks.map((book, i) => {
              return (
                <li key={i}>
                  <button onClick={() => showBookDetails(book)}>
                    {book.volumeInfo.title}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
