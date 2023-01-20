import { createContext, useReducer } from "react";
import horodatedTableReducer from "./horodatedTableReducer";

const HorodatedTableContext = createContext();

const horodatedTableUrl =
  "http://localhost:5550/data-pilote/api/v1/horodated_tables/";

export const HorodatedTableProvider = ({ children }) => {
  const initialState = {
    horodatedTables: [],

    loading: false,
  };

  const [state, dispath] = useReducer(horodatedTableReducer, initialState);


  // GET ALL HORODATED TABLES
  const fetchHorodatedTables = async () => {
    setLoading();

    const response = await fetch(horodatedTableUrl);
    const data = await response.json();

    dispath({
      type: "GET_HORODATED_TABLES",
      payload: data.data,
    });
  };
  

// GET  HORODATED TABLE BY ID
const fetchHorodatedTable = async (id) => {
  setLoading();

  const response = await fetch(horodatedTableUrl);
  const data = await response.json();

  dispath({
    type: "GET_HORODATED_TABLE",
    payload: data,
  });
};


  //Set loading
  const setLoading = () => dispath({ type: "SET_LOADING" });

  return (
    <HorodatedTableContext.Provider
      value={{
        horodatedTables: state.horodatedTables,
        loading: state.loading,
        fetchHorodatedTables,
       
      }}
    >
      {children}
    </HorodatedTableContext.Provider>
  );
};

export default HorodatedTableContext;
