import React from 'react'
//css
import styles from "./Navbar.module.scss"
//components
import SearchBar from './SearchBar'

type Props = {
  onSearch(title:string):void;
}

const Navbar = ({onSearch}: Props) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <h1>Book's Collection</h1>
          <ul>
            <li>Home</li>
            <li>Coleção</li>
          </ul>
        </div>
      
        <SearchBar onSearch={onSearch}/>
      </div>
    </div>
  )
}

export default Navbar