import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineReload, AiTwotoneDelete } from "react-icons/ai";
import Spinner from "../../components/shared/spinner/Spinner";
function BudgetHeuresCHS() {
    const params = useParams()
  const [table, setTable] = useState({});
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchStaticTable();
  }, []);

  const fetchStaticTable = async () => {
    const response = await fetch(
      `http://localhost:5550/data-pilote/api/v1/static_tables/${params.id}`
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
      {table.champ1 ? <th>{table.champ1}</th> : ""}
            {table.champ2 ? <th>{table.champ2}</th> : ""}
            {table.champ3 ? <th>{table.champ3}</th> : ""}
            {table.champ4 ? <th>{table.champ4}</th> : ""}
            {table.champ5 ? <th>{table.champ5}</th> : ""}
            {table.champ6 ? <th>{table.champ6}</th> : ""}
          <th>Actions</th>
      </tr>
        
           
            {table.staticLines.map((table) => (
            <tr>
                {table.champs1 ?   <td className={`table-title ${table.champs1 === ""  && 'warning'} `}>{table.champs1}</td>  : ""}
              {table.champs2 ?   <td className={`table-title ${table.champs2 === ""  && 'warning'} `}>{table.champs2}</td>  : ""}
              {table.champs3 ?   <td className={`table-title ${table.champs3 === ""  && 'warning'} `}>{table.champs3}</td>  : ""}
              {table.champs4 ?   <td className={`table-title ${table.champs4 === ""  && 'warning'} `}>{table.champs4}</td>  : ""}
              {table.champs5 ?   <td className={`table-title ${table.champs5 === ""  && 'warning'} `}>{table.champs5}</td>  : ""}
              {table.champs6 ?   <td className={`table-title ${table.champs6 === ""  && 'warning'} `}>{table.champs6}</td>  : ""}
              
              <td className="table-title">
                <button className="td-btn btn-danger">
                  <AiTwotoneDelete />
                </button>
                <button className="td-btn">
                  <AiOutlineReload />
                </button>
              </td>
            </tr>
          ))}
          </table>
        </div>
      );
  } else {
    return <Spinner/>
  }
 
}

export default BudgetHeuresCHS;
