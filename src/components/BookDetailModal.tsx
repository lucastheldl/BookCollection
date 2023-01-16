import React from 'react'
//scss
import styles from "./BookDetailModal.module.scss"

type Props = {
  book: any;
}

const BookDetailModal = ({book}: Props) => {

  const closeModal = (e:React.MouseEvent):void =>{
    const modal = document.querySelector("#Modal")
    console.log("abrir");
    modal!.classList.add("hide");
  }
  console.log(book);
  return (
   
    <div id='Modal' className='hide'>
       {book &&
      <div className={styles.fade}>
        <div className={styles.container}>
          <h2>{book.volumeInfo.title}</h2>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
      }
    </div>
  )
}

export default BookDetailModal