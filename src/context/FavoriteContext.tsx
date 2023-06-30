import React, { ReactNode, createContext, useState } from "react";

interface BookContextType {
  bookCollection: string[];
  setBookinCollection: (books: string) => void;
  loadBooksinCollection: (books: string[]) => void;
  //setbookCollection: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FavoriteContext = createContext({} as BookContextType);

interface BookCollectionProps {
  children: ReactNode;
}

export function FavoriteContextProvider({ children }: BookCollectionProps) {
  const [bookCollection, setBookCollection] = useState<string[]>([]);

  function setBookinCollection(book: string) {
    if (!bookCollection.includes(book)) {
      setBookCollection((prevState) => [...prevState, book]);
    } else {
      setBookCollection((prevState) => prevState.filter((b) => b !== book));
    }
  }
  function loadBooksinCollection(books: string[]) {
    setBookCollection(books);
  }

  return (
    <FavoriteContext.Provider
      value={{ bookCollection, setBookinCollection, loadBooksinCollection }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
/* export const FavoriteContext = createContext<BookContextType | null>(null);

export const FavoriteContextProvider: React.FC<Props> = ({ children }) => {
  const [bookCollection, setbookCollection] = useState<string[]>([]);

  return (
    <FavoriteContext.Provider value={{ bookCollection, setbookCollection }}>
      {children}
    </FavoriteContext.Provider>
  );
}; */
