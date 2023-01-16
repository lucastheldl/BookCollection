import React,{useState,useEffect} from 'react'
import { getBooks,getBook } from '../api'
//css
import styles from "./Home.module.scss"

//components
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import BookDetailModal from '../components/BookDetailModal';

type Props = {}

const Home = (props: Props) => {
  const [books,setBooks] = useState<any[]>([]);
  const [bookDetail,setbookDetail] = useState<any>(null);
  const [loading,setLoading] = useState(false);

  const onSearch = (title:string) =>{
    fetchBooks(title);
  }

  const fetchBooks =async (title:string) => {
    setLoading(true);
    try {
      const data = await getBook(title)
      setBooks(data.items);
      console.log(data);
      setLoading(false);
    } 
    catch (error:any) {
      console.log("fetchBooks", error.message)
      setLoading(false);
    }
  }
  useEffect(()=>{
    fetchBooks("harry Potter");
  },[])

  const openModal = () =>{
    const modal = document.querySelector("#Modal")
    modal!.classList.remove("hide");
  }
  const showBookDetails = (book:any):void =>{
    setbookDetail(book);

    openModal();
  }
  return (
    <>
    <BookDetailModal book={bookDetail}/>
    <Navbar onSearch = {onSearch}/>
    <div className={styles.container}>
      {loading ? (<p>Carregando...</p>):
       (books.length >0 && books.map((book,index) =>{
        return(<Book key={index} book={book} showBookDetails={showBookDetails}/>)
      }))}
       
    </div>
    </>
    
  )
}

export default Home