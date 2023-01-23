import { useEffect, useState } from "react";

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
      <div>
        <h1>Tableau Pluviometrie</h1>
        <table>
          <tr>
            <th>Date</th>
            <th>mois numeros</th>
            <th>Pluviometrie</th>
          
          </tr>

          {dataTable.map((table) => (
            <tr>
              <td className="table-title"> {new Date(table.createdAt).toLocaleDateString()}</td>
              <td className="table-title">{table.month}</td>
              <td className="table-title">{table.pluviometrie}</td>
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
