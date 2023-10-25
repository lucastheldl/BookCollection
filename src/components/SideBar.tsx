import { CaretCircleDown, X } from "@phosphor-icons/react";
import styles from "./SideBar.module.scss";

interface SideBarProps {
  isModalOpen: boolean;
  toggleBurguerMenu: () => void;
}
export function SideBar({ isModalOpen, toggleBurguerMenu }: SideBarProps) {
  return (
    <div className={`${styles.container} ${isModalOpen ? styles.open : ""}`}>
      <button onClick={toggleBurguerMenu}>
        <X size={32} />
      </button>
      Favoritados
      <CaretCircleDown />
    </div>
  );
}
