import { useContext, useEffect } from "react";
import StaticTableContext from "../../context/table/staticTables/staticTableContext";
import Spinner from "../shared/spinner/Spinner";

function StaticTablesList() {
  const { loading, staticTables, fetchStaticTables } =
    useContext(StaticTableContext);

  useEffect(() => {
    fetchStaticTables();
  }, []);
  if (!loading) {
    return (
      <>
        {staticTables.map((item) => (
         
      

            <div className="link-content">
            <p> créer le:   <span>{new Date(item.createdAt).toLocaleDateString()}</span>  </p>
            <p> Modifié le:   <span>{new Date(item.updatedAt).toLocaleDateString()}</span>  </p>
              <h3>{item.title}</h3>
              <button>Copier le lien</button>

              <div className="link">
                <p>
                  {item.link}
                </p>
              </div>
            </div>
          
        ))}
      </>
    );
  } else return <Spinner />;
}

export default StaticTablesList;
