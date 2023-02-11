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
      <div className="header-link">
        <p>
          Tableaux horodatés : <span>{horodatedTable.count}</span>{" "}
        </p>
        <p>
          Tableaux Static : <span>{staticTable.count} </span>{" "}
        </p>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default HeaderLinks;
