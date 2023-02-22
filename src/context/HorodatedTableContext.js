import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const HorodatedTableContext = createContext();

export const HorodatedTableProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [horodatedTable, setHorodatedTable] = useState([]);
  const [horodatedTableEdit, setHorodatedTableEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchHorodatedTable();
  }, []);

  // Fetch horodated tables
  const fetchHorodatedTable = async () => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL + `/horodated_tables`
    );
    const data = await response.json();

    setHorodatedTable(data);
    setIsLoading(false);
  };

  // Add horodated table
  const addHorodatedTable = async (newHorodatedTable) => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL + `/horodated_tables`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHorodatedTable),
      }
    );

    const data = await response.json();

    setHorodatedTable([data, ...horodatedTable]);
  };

  // Delete horodated
  const deleteHorodatedTable = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(
        process.env.REACT_APP_BASE_URL + `/horodated_tables/${id}`,
        { method: "DELETE" }
      );
      

      window.location.reload();
      setHorodatedTable(horodatedTable.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateHorodatedTable = async (id, updItem) => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL + `/horodated_tables/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updItem),
      }
    );

    const data = await response.json();

    // NOTE: no need to spread data and item
    setHorodatedTable(
      horodatedTable.map((item) => (item.id === id ? data : item))
    );

    // FIX: this fixes being able to add a feedback after editing
  
    setHorodatedTable({
      item: {},
      edit: false,
    });
  };

  // Set item to be updated
  const editHorodatedTable = (item) => {
    setHorodatedTable({
      item,
      edit: true,
    });
  };

  return (
    <HorodatedTableContext.Provider
      value={{
        horodatedTable,
        horodatedTableEdit,
        fetchHorodatedTable,
        isLoading,
        deleteHorodatedTable,
        addHorodatedTable,
        editHorodatedTable,
        updateHorodatedTable,
      }}
    >
      {children}
    </HorodatedTableContext.Provider>
  );
};

export default HorodatedTableContext;
