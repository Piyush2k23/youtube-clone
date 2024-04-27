import "./searchBar.css";
import { GoSearch } from "react-icons/go";
import { MdKeyboardVoice } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="searchBar-container">
        <input type="text" placeholder="Search" />
        <div className="search">
           <GoSearch />
        </div>
        <div className="voice-container">
          <MdKeyboardVoice size={23}/>
        </div>
    </div>
  )
}

export default SearchBar;