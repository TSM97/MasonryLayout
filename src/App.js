import {useState} from "react";
import './App.css';
import {Body} from "./Components";
import {SearchBar} from './Components';


function App() {
  
  const [search,setSearch]= useState(null);

  const onSearch = (text) => {
    setSearch(text);
  };
  console.log(search);
  
  return (
    <>
    <SearchBar onSearch={onSearch}></SearchBar>
    <div className="container">
    <Body search={search}>
    </Body>
    </div>
    </>
  );
}

export default App;
