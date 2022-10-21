import {useState} from "react";
import './App.css';
import {Body, SearchBar} from "./Components";

function App() {

  const [searchText,setSearchText]= useState('');

  const onSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
    <SearchBar onSearch={onSearch}></SearchBar>
    <div className="container">
    <Body search={searchText}>
    </Body>
    </div>
    </>
  );
}

export default App;
