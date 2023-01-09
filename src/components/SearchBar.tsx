import React from 'react'
//css
import styles from "./SearchBar.module.css"

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <div><input type="text" className={styles.searchbar} placeholder="Buscar um livro..."></input>
    <button className={styles.search_btn}>Buscar</button></div>
  )
}

export default SearchBar