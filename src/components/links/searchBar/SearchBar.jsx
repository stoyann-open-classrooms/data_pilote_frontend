import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searbar.css";

function SearchBar() {

  const [filter, setFilter] = useState('')

const handleChange = (e) => {
setFilter(e.target.value);

}


  return (
    <>
      <form className="filter-container">
        <h2>Filtrer par types de tableaux</h2>

  

        <div className="form-group">
          Tous <input onChange={handleChange} value='all'  type="checkbox" id="all" name="all" />
          Horodatés <input onChange={handleChange} value='horodated' type="checkbox" id="horodated" name="horodated" />
          Statique <input  onChange={handleChange} value='static' type="checkbox" id="static" name="static" />
        </div>
      </form>
  
    </>
  );
}

export default SearchBar;
