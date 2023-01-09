import React from 'react'
//css
import styles from "./Navbar.module.css"
//components
import SearchBar from './SearchBar'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      <h1>Book's Collection</h1>
      <ul>
        <li>Home</li>
        <li>Colleção</li>
        <li><SearchBar/></li>
      </ul>
      
    </div>
  )
}

export default Navbar