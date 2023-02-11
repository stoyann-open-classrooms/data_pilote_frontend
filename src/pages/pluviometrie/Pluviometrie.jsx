import { useEffect, useState } from "react";
import Hero from "../../components/layout/hero/Hero";

function Pluviometrie() {
  const [loading, setLoading] = useState(true);
  const [dataTable, setDataTable] = useState({});

  useEffect(() => {
    fetchPluviometrieTables();
  }, []);

  const fetchPluviometrieTables = async () => {
    const response = await fetch(
      "http://localhost:5550/data-pilote/api/v1/weathers"
    );
    const data = await response.json();
    setDataTable(data.data);
    console.log(dataTable);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="table-page-container">
        <Hero title={"Tableau Pluviométrie"} />

        <table>
          <tr>
            <th>Date</th>
            <th>Heure</th>
            <th>Pluviometrie</th>
          </tr>

          {dataTable.map((table) => (
            <tr>
              <td className="table-title">
                {" "}
                {new Date(table.createdAt).toLocaleDateString()}
              </td>
             
              <td className={`table-title ${table.heure === "" && "danger"} `}>
                {" "}
                {table.heure}
              </td>
              
              <td
                className={`table-title ${
                  (table.pluviometrie === "" ||
                    table.pluviometrie.includes("hPa") == true) &&
                  "danger"
                } `}
              >
                {table.pluviometrie}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return <h1>LOADING...</h1>;
  }
}

export default Pluviometrie;
