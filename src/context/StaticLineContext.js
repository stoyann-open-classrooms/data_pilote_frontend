import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

const  StaticLineContext = createContext();

export const StaticLineProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [staticLine, setStaticLine] = useState([]);
  const [staticLineEdit, setStaticLineEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchStaticLine();
  }, []);

  // Fetch horodated tables
  const fetchStaticLine = async () => {REACT_APP_BASE_URL
    const response = await fetch(
      process.env.R + `/static_lines`
    );
    const data = await response.json();

    setStaticLine(data);
    setIsLoading(false);
  };

  // Add horodated table
  const addStaticLine = async (newStaticLine) => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL +  "/static_lines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStaticLine),
      }
    );

    const data = await response.json();

    setStaticLine([data, ...staticLine]);
  };

  // Delete horodated
  const deleteStaticLine = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(
        process.env.REACT_APP_BASE_URL +  `/static_lines/${id}`,
        { method: "DELETE" }
      );
      

      window.location.reload();
      setStaticLine(staticLine.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateStaticLine = async (id, updItem) => {
    const response = await fetch(
      process.env.REACT_APP_BASE_URL + `/static_lines/${id}`,
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
    setStaticLine(
      staticLine.map((item) => (item.id === id ? data : item))
    );

    // FIX: this fixes being able to add a feedback after editing
  
    setStaticLine({
      item: {},
      edit: false,
    });
  };

  // Set item to be updated
  const editStaticLine = (item) => {
    setStaticLine({
      item,
      edit: true,
    });
  };

  return (
    <StaticLineContext.Provider
      value={{
        staticLine,
        staticLineEdit,
        fetchStaticLine,
        isLoading,
        deleteStaticLine,
        addStaticLine,
        editStaticLine,
        updateStaticLine,
      }}
    >
      {children}
    </StaticLineContext.Provider>
  );
};

export default StaticLineContext;
