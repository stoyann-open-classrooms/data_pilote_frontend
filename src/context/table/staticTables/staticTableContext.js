import { createContext, useReducer } from "react";
import staticTableReducer from "./staticTableReducer";

const StaticTableContext = createContext();

const staticTableUrl =
  "http://localhost:5550/data-pilote/api/v1/static_tables/";

export const StaticTableProvider = ({ children }) => {
  const initialState = {
    staticTables: [],

    loading: false,
  };

  const [state, dispath] = useReducer(staticTableReducer, initialState);


  // GET ALL HORODATED TABLES
  const fetchStaticTables = async () => {
    setLoading();

    const response = await fetch(staticTableUrl);
    const data = await response.json();

    dispath({
      type: "GET_STATIC_TABLES",
      payload: data.data,
    });
  };
  

// GET  HORODATED TABLE BY ID
const fetchStaticTable = async (id) => {
  setLoading();

  const response = await fetch(staticTableUrl);
  const data = await response.json();

  dispath({
    type: "GET_STATIC_TABLE",
    payload: data,
  });
};


  //Set loading
  const setLoading = () => dispath({ type: "SET_LOADING" });

  return (
    <StaticTableContext.Provider
      value={{
        staticTables: state.staticTables,
        loading: state.loading,
        fetchStaticTables,
       
      }}
    >
      {children}
    </StaticTableContext.Provider>
  );
};

export default StaticTableContext;
