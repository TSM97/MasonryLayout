import './SearchBar.css';

const SearchBar = () => {
    return(
      <div className="searchBar">  
        <img src={require("../../../Images/pinterestIcon.svg").default} className="pSign" onClick={()=>{window.location.reload()}} alt="iconP" />
        <div className="greyWords">Analytics</div> 
        <div className="greyWords">Ads</div> 
        <input className='search' type="text" placeholder="Search..."></input>
        <div className="greyWords">Home</div> 
      </div>
    ) 
  }
  
  
  export default SearchBar;