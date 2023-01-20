import { useEffect, useState } from "react";

function BudgetHeuresCHS() {
  const [table, setTable] = useState({});
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchStaticBudgetChsTables();
  }, []);

  const fetchStaticBudgetChsTables = async () => {
    const response = await fetch(
      "http://localhost:5550/data-pilote/api/v1/static_tables/637a3694e5fc335f796a4860"
    );
    const data = await response.json();
    setTable(data.data);
    console.log(table);
    setLoading(false)
  };
  if(!loading) {
    return (
        <div>
          <h1> Tableau Statique {table.title}</h1>
    
          <table>
            <tr>
              <th>{table.champs1}</th>
              <th>{table.champs2}</th>
              <th>{table.champs3}</th>
            </tr>
            {table.staticLines.map((table) => (
            <tr>

              <td className="table-title">{table.champs1}</td>
              <td className="table-title">{table.champs2}</td>
              <td className="table-title">{table.champs3}</td>
            </tr>
          ))}
          </table>
        </div>
      );
  } else {
    return <h1>LOADING...</h1>
  }
 
}

export default BudgetHeuresCHS;
