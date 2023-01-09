import React from 'react'
//css
import styles from "./Navbar.module.css"
//components
import SearchBar from './SearchBar'

type Props = {}

const Navbar = (props: Props) => {
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
      
        <SearchBar/>
      </div>
    </div>
  )
}

export default Navbar