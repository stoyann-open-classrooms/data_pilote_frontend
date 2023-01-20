const horodatedTableReducer = (state, action) => {
  switch (action.type) {
    case "GET_HORODATED_TABLES":
      return {
        ...state,
        horodatedTables: action.payload,
        loading: false,
      };
      case  "GET_HORODATED_TABLE":
      return {
        ...state,
        horodatedTable: action.payload,
        loading: false,
      };
      case "SET_LOADING": 
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
};

export default horodatedTableReducer;
