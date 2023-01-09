import React from 'react'
//css
import styles from "./Book.module.css"

type Props = {
  book:any
}

const Book = ({book}: Props) => {
  let thumb = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
  return (
    <div className={styles.cardContainer}>
      <img src={thumb}></img>
      <h3>{book.volumeInfo.title}</h3>
      <button className={styles.detail_btn}>Detalhes</button>
    </div>
  )
}

export default Book