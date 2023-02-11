import "./table.css";
import { BiInfoCircle } from "react-icons/bi";
import Dialog from "../../components/shared/modal/Dialog";
import NewStaticTable from "../../components/newTable/NewStaticTable";
import NewHoradedTable from "../../components/newTable/NewHoradedTable";
import Hero from "../../components/layout/hero/Hero";
import Sidebar from "../../components/layout/sidebar/Sidebar";
function NewTable() {
  return (
    <>
      <Sidebar />
      <main>
        <Hero title={"Créer un nouveaux tableau de données"} />
        <div className="btn-container">
          <Dialog btn={"Tableau statique"}>
            <NewStaticTable />
          </Dialog>

          <Dialog btn={"Tableau horodatés"}>
            <NewHoradedTable />
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
            La principale différence entre les deux est que les tableaux
            horodatés contiennent obligatoirement une date. Ces tableaux peuvent
            contenir autant de lignes que vous le souhaitez.
          </p>
          <p>
            En revanche les tableaux statiques ne sont pas obligatoirement datés
            mais ne peuvent contenir qu'une seule ligne.
          </p>
          <p>
            {" "}
            Les tableaux dynamiques sont idéaux pour les données qui doivent
            être mises à jour régulièrement, tandis que les tableaux statiques
            conviennent mieux aux données qui ne changent pas souvent.
          </p>
          <p>Tous les tableaux sont limités a 6 champs (colonnes)</p>
        </div>
      </main>
    </>
  );
}

export default NewTable;
