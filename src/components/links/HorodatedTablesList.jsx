import { useContext, useEffect } from "react";
import HorodatedTableContext from "../../context/table/horodatedTables/horodatedTableContext";
import Spinner from "../shared/spinner/Spinner";

function HorodatedTablesList() {
  const { loading, horodatedTables, fetchHorodatedTables } = useContext(
    HorodatedTableContext
  );

  useEffect(() => {
    fetchHorodatedTables();
  }, []);
  if (!loading) {
    return (
      <>
        {horodatedTables.map((item) => (
    
            <div className="link-content">
              <p>
                {" "}
                créer le:{" "}
                <span>
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>{" "}
              </p>
              <p>
                {" "}
                Modifié le:{" "}
                <span>
                  {new Date(item.updatedAt).toLocaleDateString()}
                </span>{" "}
              </p>
              <h3>{item.title}</h3>
              <button>Copier le lien</button>

              <div className="link">
                <p>{item.link}</p>
              </div>
            </div>
        
        ))}
      </>
    );
  } else return <Spinner />;
}

export default HorodatedTablesList;
