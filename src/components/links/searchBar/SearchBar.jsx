import { FaSearch } from "react-icons/fa";
import "./searbar.css";

function SearchBar() {
  return (
    <>
      <div className="filter-container">
        <legend>Filtrer par types de tableaux</legend>

        <div>
          <input type="checkbox" id="horodated" name="horodated" />
          <label for="horodated">Horodatés</label>
        </div>

        <div>
          <input type="checkbox" id="static" name="static" />
          <label for="static">Statique</label>
        </div>
      </div>
      <div className="searchBar-container">
        <input type="text" placeholder="Rechercher un tableau" />
        <div className="searchIcon">

        <FaSearch/>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
