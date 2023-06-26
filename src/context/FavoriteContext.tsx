import React, { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

type BookContextType = {
  bookCollection: string[];
  setbookCollection: React.Dispatch<React.SetStateAction<string[]>>;
};

export const FavoriteContext = createContext<BookContextType | null>(null);

export const FavoriteContextProvider: React.FC<Props> = ({ children }) => {
  const [bookCollection, setbookCollection] = useState<string[]>([]);

  return (
    <FavoriteContext.Provider value={{ bookCollection, setbookCollection }}>
      {children}
    </FavoriteContext.Provider>
  );
};
