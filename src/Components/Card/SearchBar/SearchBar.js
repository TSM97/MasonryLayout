import './SearchBar.css';

const SearchBar = ({onSearch}) => {

  const handleKeyDown = e => {

    onSearch(e.target.value)

  }

  return(
    <div className="searchBar">
     <img src={require("../../../Images/pinterestIcon.svg").default} className="pSign" onClick={()=>{window.location.reload()}} alt="iconP" />
     <div className="greyWords">Analytics</div>
     <div className="greyWords">Ads</div>
     <input className='search' id="input" onChange={handleKeyDown} type="search" placeholder="Search..."/>
     <div className="greyWords">Home</div>
    </div>
  )

}

  export default SearchBar;
