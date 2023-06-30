const key = process.env.REACT_APP_API_KEY;

//return especific book from api
export const getBook = async (book: string) => {
  try {
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=${book}&key=${key}&maxResults=40&startIndex=${0}`;
    const res: any = await fetch(url);
    return await res.json();
  } catch (error: any) {
    console.log("GetAllBooks", error.message);
  }
};
//return especific book from api using id
export const getBookById = async (book: string) => {
  try {
    const url: string = `https://www.googleapis.com/books/v1/volumes/${book}?key=${key}`;
    const res: any = await fetch(url);
    return await res.json();
  } catch (error: any) {
    console.log("GetAllBooks", error.message);
  }
};

//retun all the books on the api
export const getBooks = async () => {
  try {
    const url: string = `https://www.googleapis.com/books/v1/volumes?q=all&key=${key}`;
    const res: any = await fetch(url);
    return await res.json();
  } catch (error: any) {
    console.log("GetAllBooks", error.message);
  }
};
