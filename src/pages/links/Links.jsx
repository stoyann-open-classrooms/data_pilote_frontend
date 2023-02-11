import Hero from "../../components/layout/hero/Hero";
import SearchBar from "../../components/links/searchBar/SearchBar";
import HorodatedTablesList from "../../components/links/HorodatedTablesList";
import StaticTablesList from "../../components/links/StaticTablesList";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./links.css";
import { useState } from "react";
import { toast } from "react-toastify";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Card from "../../components/shared/card/Card";
import HeaderLinks from "../../components/links/HeaderLinks";

function Links() {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    toast.success("lien copiée dans le press papier");
  };
  return (
    <>
      <Sidebar />
      <main>
        <Hero title={"Gerer les liens"} />
   
        <HeaderLinks/>

        <div className="link-container">
          <StaticTablesList />
          <HorodatedTablesList />

          {/* <Card>
            <div className="details">
              <p>
                {" "}
                créer le: <span>24/01/2023</span>{" "}
              </p>
              <p>
                {" "}
                Modifié le: <span>{new Date().toLocaleDateString()}</span>{" "}
              </p>
              <p>type de tableau : Automatique</p>
            </div>

            <h3>Pluviometrie</h3>
            <CopyToClipboard text="http://localhost:3000/pluviometrie/637a3694e5fc335f796a4141">
              <>
                <button onClick={onCopy}>Copier le lien</button>
              </>
            </CopyToClipboard>

            <div className="link">
              <p>http://localhost:3000/pluviometrie/637a3694e5fc335f796a4141</p>
            </div>
          </Card> */}
        </div>
      </main>
    </>
  );
}

export default Links;
