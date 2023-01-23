import "./table.css";
import { BiInfoCircle } from "react-icons/bi";
import Dialog from "../../components/shared/modal/Dialog";
import NewStaticTable from "../../components/newTable/NewStaticTable";
import NewHoradedTable from "../../components/newTable/NewHoradedTable";
function NewTable() {
  return (
    <div>
      <h1>Créer un nouveaux tableau de donées</h1>
      <div className="btn-container">
        <Dialog btn={"Tableau satique"}>
          <NewStaticTable/>
          {/* <form>
            <h4>Créer un tableau statique</h4>
          
            <div className="form_group">
              <label htmlFor="champ1">Titre de la Colonne n° 1</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ2">Titre de la Colonne n° 2</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ3">Titre de la Colonne n° 3</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ4">Titre de la Colonne n° 4</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ5">Titre de la Colonne n° 5</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ6">Titre de la Colonne n° 6</label>
              <input type="text" />
            </div>

            <button className="submit_btn" type="submit">
              {" "}
              Créer ce tableau
            </button>
          </form> */}
        </Dialog>

        <Dialog btn={"Tableau horodatés"}>
          <NewHoradedTable/>
          {/* <form>
            <h4>Créer un tableau horodatés</h4>
            
            <div className="form_group">
              <label htmlFor="champ1">Titre de la Colonne n° 1</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ2">Titre de la Colonne n° 2</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ3">Titre de la Colonne n° 3</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ4">Titre de la Colonne n° 4</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ5">Titre de la Colonne n° 5</label>
              <input type="text" />
            </div>
            <div className="form_group">
              <label htmlFor="champ6">Titre de la Colonne n° 6</label>
              <input type="text" />
            </div>

            <button className="submit_btn" type="submit">
              {" "}
              Créer ce tableau
            </button>
          </form> */}
        </Dialog>
      </div>
      <div className="text_container">
        <p className="icone">
          <BiInfoCircle />
        </p>
        <p>
          Les tableaux horodatés et statiques sont des outils utiles pour
          organiser et afficher vos données.{" "}
        </p>
        <p>
          La principale différence entre les deux est que les tableaux horodatés
          contiennent obligatoirement une date. Ces tableaux peuvent contenir
          autant de lignes que vous le souhaitez.
        </p>
        <p>
          En revanche les tableaux statiques ne sont pas obligatoirement datés
          mais ne peuvent contenir qu'une seule ligne.
        </p>
        <p>
          {" "}
          Les tableaux dynamiques sont idéaux pour les données qui doivent être
          mises à jour régulièrement, tandis que les tableaux statiques
          conviennent mieux aux données qui ne changent pas souvent.
        </p>
        <p>Tous les tableaux sont limités a 6 champs (colonnes)</p>
      </div>
    </div>
  );
}

export default NewTable;
