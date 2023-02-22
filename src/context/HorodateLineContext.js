import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const  HorodatedLineContext = createContext();

export const HorodatedLineProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [horodatedLine, setHorodatedLine] = useState([]);
  const [horodatedLineEdit, setHorodatedLineEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchHorodatedLine();
  }, []);

  // Fetch horodated tables
  const fetchHorodatedLine = async () => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL + `/horodated_lines`
    );
    const data = await response.json();

    setHorodatedLine(data);
    setIsLoading(false);
  };

  // Add horodated table
  const addHorodatedLine = async (newHorodatedLine) => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL + "/horodated_lines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHorodatedLine),
      }
    );

    const data = await response.json();

    setHorodatedLine([data, ...horodatedLine]);
  };

  // Delete horodated
  const deleteHorodatedLine = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(
        process.env.REACT_APP_BASE_URL + `/horodated_lines/${id}`,
        { method: "DELETE" }
      );
      

      window.location.reload();
      setHorodatedLine(horodatedLine.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateHorodatedLine = async (id, updItem) => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL + `/horodated_lines/${id}`,
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
    setHorodatedLine(
      horodatedLine.map((item) => (item.id === id ? data : item))
    );

    // FIX: this fixes being able to add a feedback after editing
  
    setHorodatedLine({
      item: {},
      edit: false,
    });
  };

  // Set item to be updated
  const editHorodatedLine = (item) => {
    setHorodatedLine({
      item,
      edit: true,
    });
  };

  return (
    <HorodatedLineContext.Provider
      value={{
        horodatedLine,
        horodatedLineEdit,
        fetchHorodatedLine,
        isLoading,
        deleteHorodatedLine,
        addHorodatedLine,
        editHorodatedLine,
        updateHorodatedLine,
      }}
    >
      {children}
    </HorodatedLineContext.Provider>
  );
};

export default HorodatedLineContext;
