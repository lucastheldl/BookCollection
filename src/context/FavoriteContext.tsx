import React, { ReactNode, createContext, useState } from "react";

interface BookContextType {
  bookCollection: string[];
  setCollectionBooks: (books: string[]) => void;
  //setbookCollection: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FavoriteContext = createContext({} as BookContextType);

interface BookCollectionProps {
  children: ReactNode;
}

export function FavoriteContextProvider({ children }: BookCollectionProps) {
  const [bookCollection, setBookCollection] = useState<string[]>([]);

  function setCollectionBooks(books: string[]) {
    setBookCollection(books);
  }

  return (
    <FavoriteContext.Provider value={{ bookCollection, setCollectionBooks }}>
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
