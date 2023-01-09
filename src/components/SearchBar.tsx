import React,{ChangeEvent, FormEvent, useState} from 'react'
//css
import styles from "./SearchBar.module.css"

type Props = {
  onSearch(title:string):void;
}

const SearchBar = ({onSearch}: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    onSearch(search);  
    setSearch("");
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{

    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      //onSearch(undefined);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className={styles.searchbar} placeholder="Buscar um livro..." value={search} onChange={handleChange}></input>
      <button type='submit' className={styles.search_btn}>Buscar</button>
    </form>
  )
}

export default SearchBar