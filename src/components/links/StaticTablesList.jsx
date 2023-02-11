import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import StaticTableContext from "../../context/StaticTableContext";
import Spinner from "../shared/spinner/Spinner";

import LinkItem from "./LinkItem";

function StaticTablesList() {


  const {
    staticTable,
    staticTableEdit,
    fetchStaticTable,
    isLoading,
    deleteStaticTable,
    editStaticTable,
    updateStaticTable,

  } = useContext(StaticTableContext);
  useEffect(() => {
    fetchStaticTable();
   
  }, []);



  if (!isLoading) {
    return (
      <>
        {staticTable.data.map((item) => (
          <LinkItem
            item={item}
            key={item.id}
            horodated={false}
            deleteStaticTable={ deleteStaticTable}
           
            updateStaticTable={updateStaticTable}
          />
        ))}
      </>
    );
  } else return <Spinner />;
}

export default StaticTablesList;
