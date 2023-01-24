import { useEffect, useState } from "react";
import { AiOutlineReload, AiTwotoneDelete } from "react-icons/ai";
import Hero from "../../components/layout/hero/Hero";
import Spinner from "../../components/shared/spinner/Spinner";
import { useParams } from "react-router-dom";
function Objectifs() {
  const [loading, setLoading] = useState(true);
  const [dataTable, setDataTable] = useState({});
const params = useParams()
  useEffect(() => {
    fetchHorodatedTable();
  }, []);

  const fetchHorodatedTable = async () => {
    const response = await fetch(
      `http://localhost:5550/data-pilote/api/v1/horodated_tables/${params.id}`
    );
    const data = await response.json();
    setDataTable(data.data);
    console.log(dataTable);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div>
         <Hero title={dataTable.title}/>
        <table>
        <tr>
            <th>{dataTable.date}</th>
            {dataTable.champ1 ? <th>{dataTable.champ1}</th> : ""}
            {dataTable.champ2 ? <th>{dataTable.champ2}</th> : ""}
            {dataTable.champ3 ? <th>{dataTable.champ3}</th> : ""}
            {dataTable.champ4 ? <th>{dataTable.champ4}</th> : ""}
            {dataTable.champ5 ? <th>{dataTable.champ5}</th> : ""}
            {dataTable.champ6 ? <th>{dataTable.champ6}</th> : ""}
         
     
          <th>Actions</th>
          </tr>

          {dataTable.horodatedLines.map((table) => (
            <tr>
              <td className= {`table-title ${table.date === ""  && 'warning'} `} > {table.date}</td>
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
    return <Spinner/>;
  }
}

export default Objectifs;
