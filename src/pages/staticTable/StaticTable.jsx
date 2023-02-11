import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Spinner from "../../components/shared/spinner/Spinner";
import Dialog from "../../components/shared/modal/Dialog";

import AddStaticLineForm from "./AddStaticLineForm";
import StaticTableTab from "./StaticTableTab";

function StaticTable() {





  

  const params = useParams();
  const [table, setTable] = useState({});

  const [loading, setLoading] = useState(true);
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
    setLoading(false);
  };
  if (!loading) {
    return (
      <>
        <div className="table-page-container">
          <div className="table-page-hero">
            <div className="table-page-hero-text">
              <h1>
                {" "}
                Tableau {table.tableType} : <span>{table.title}</span>{" "}
              </h1>
              <p>{table.description}</p>
            </div>
            <div className="table-page-hero-btn">
              <Dialog btn={"Nouvelle entrée"}>
                <h3>Nouvelle entrée</h3>

                <AddStaticLineForm table={table} tableId={params.id} />
              </Dialog>
            </div>
          </div>
          <StaticTableTab table={table}/>

        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
}

export default StaticTable;
