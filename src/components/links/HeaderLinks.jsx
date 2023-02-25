import React, { useContext, useEffect } from "react";
import HorodatedTableContext from "../../context/HorodatedTableContext";
import StaticTableContext from "../../context/StaticTableContext";
import Spinner from "../shared/spinner/Spinner";

function HeaderLinks() {
  const {
    horodatedTable,

    fetchHorodatedTable,
    isLoading,
    deleteHorodatedTable,

    updateHorodatedTable,
  } = useContext(HorodatedTableContext);

  const {
    staticTable,

    fetchStaticTable,
  } = useContext(StaticTableContext);

  useEffect(() => {
    fetchHorodatedTable();
  }, []);
  if (!isLoading) {
    return (
      <div className="ticket-page">
        <hr />
        <h2>Tableaux horodatés : <span>{horodatedTable.count}</span></h2>
      
          <h2>Tableaux statiques <span>{staticTable.count} </span></h2>
       
      <hr />
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default HeaderLinks;
