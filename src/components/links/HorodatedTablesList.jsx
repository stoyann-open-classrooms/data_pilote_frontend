import axios from "axios";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import HorodatedTableContext from "../../context/HorodatedTableContext";
import Spinner from "../shared/spinner/Spinner";

import LinkItem from "./LinkItem";
function HorodatedTablesList() {
  const {
    horodatedTable,

    fetchHorodatedTable,
    isLoading,
    deleteHorodatedTable,

    updateHorodatedTable,
  } = useContext(HorodatedTableContext);

  useEffect(() => {
    fetchHorodatedTable();
  }, []);
  if (!isLoading) {
    return (
      <>
        {horodatedTable.data.map((item) => (
          <LinkItem
            horodated={true}
            item={item}
            key={item.id}
            deleteHorodatedTable={() => deleteHorodatedTable(item.id)}
            updateHorodatedTable={updateHorodatedTable}
          />
        ))}
      </>
    );
  } else return <Spinner />;
}

export default HorodatedTablesList;
