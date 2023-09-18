import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  leftClick: () => void;
  rightClick: () => void;
}

export function Pagination({
  currentPage,
  totalPages,
  leftClick,
  rightClick,
}: PaginationProps) {
  return (
    <div className={styles.paginationContainer}>
      <button onClick={leftClick}>{"<"}</button>
      {currentPage} de {totalPages}
      <button onClick={rightClick}>{">"}</button>
    </div>
  );
}
