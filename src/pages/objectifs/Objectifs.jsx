import { useEffect, useState } from "react";

function Objectifs() {
  const [loading, setLoading] = useState(true);
  const [dataTable, setDataTable] = useState({});

  useEffect(() => {
    fetchHorodatedObjectifTables();
  }, []);

  const fetchHorodatedObjectifTables = async () => {
    const response = await fetch(
      "http://localhost:5550/data-pilote/api/v1/horodated_tables/637a3694e5fc335f796a4140"
    );
    const data = await response.json();
    setDataTable(data.data);
    console.log(dataTable);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div>
        <h1>Tableau {dataTable.title}</h1>
        <table>
          <tr>
            <th>{dataTable.date}</th>
            <th>{dataTable.champs1}</th>
            <th>{dataTable.champs2}</th>
            <th>{dataTable.champs3}</th>
          </tr>

          {dataTable.horodatedLines.map((table) => (
            <tr>
              <td className= {`table-title ${table.date === ""  && 'warning'} `} > {table.date}</td>
              <td className={`table-title ${table.champs1 === ""  && 'warning'} `}>{table.champs1}</td>
              <td className={`table-title ${table.champs2 === ""  && 'warning'} `}>{table.champs2}</td>
              <td className={`table-title ${table.champs3 === ""  && 'warning'} `}>{table.champs3}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  } else {
    return <h1>LOADING...</h1>;
  }
}

export default Objectifs;
