import React,{useState,useEffect} from 'react'
import { getBooks,getBook } from '../api'
//css
import styles from "./Home.module.css"

//components
import Book from '../components/Book';

type Props = {}

const Home = (props: Props) => {
  const [books,setBooks] = useState<any[]>([]);
  const [loading,setLoading] = useState(false);

  const fetchBooks =async () => {
    setLoading(true);
    try {
      const data = await getBook("pig")
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
    fetchBooks();
  },[])

  return (
    <div className={styles.container}>
      {loading ? (<p>Carregando...</p>):
       (books.length >0 && books.map((book,index) =>{
        return(<Book key={index} book={book}/>)
      }))}
       
    </div>
  )
}

export default Home