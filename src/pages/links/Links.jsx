import Hero from "../../components/layout/hero/Hero";
import SearchBar from "../../components/links/searchBar/SearchBar";
import HorodatedTablesList from "../../components/links/HorodatedTablesList";
import StaticTablesList from "../../components/links/StaticTablesList";
import "./links.css";

function Links() {
  return (
    <div>
      <Hero title={"Gerer les liens"} />

      <SearchBar />

<div className="link-container">

      <StaticTablesList/>
      <HorodatedTablesList/>


    
            <div className="link-content">
              <p>
                {" "}
                créer le:{" "}
                <span>
                 24/01/2023
                </span>{" "}
              </p>
              <p>
                {" "}
                Modifié le:{" "}
                <span>
                  {new Date().toLocaleDateString()}
                </span>{" "}
              </p>
              <h3>Pluviometrie</h3>
              <button>Copier le lien</button>

              <div className="link">
              <p>http://localhost:3000/pluviometrie/637a3694e5fc335f796a4141</p>
              </div>
            </div>
            </div>
          </div>



     
       
     
  
  );
}

export default Links;
