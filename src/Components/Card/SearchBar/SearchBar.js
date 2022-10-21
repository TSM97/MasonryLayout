import './SearchBar.css';

const SearchBar = ({onSearch}) => {

  const handleKeyDown = e => {
    // console.log('User pressed: ', event.key);
    // if((event.which>=48 && event.which<=90) || event.which===32){
    // text=text+event.key;
    // }
    if (e.key === "Enter") {
      let text=document.getElementById("input").value
      onSearch(text)
      document.getElementById("input").value=null
    }
  }

  return(
    <div className="searchBar">  
     <img src={require("../../../Images/pinterestIcon.svg").default} className="pSign" onClick={()=>{window.location.reload()}} alt="iconP" />
     <div className="greyWords">Analytics</div> 
     <div className="greyWords">Ads</div> 
     <input className='search' id="input" onKeyDown={handleKeyDown} type="search" placeholder="Search..."></input>
     <div className="greyWords">Home</div> 
    </div>
  ) 
 
}
  
  export default SearchBar;