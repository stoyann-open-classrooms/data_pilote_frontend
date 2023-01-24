const staticTableReducer = (state, action) => {
  switch (action.type) {
    case "GET_STATIC_TABLES":
      return {
        ...state,
        staticTables: action.payload,
        loading: false,
      };
      case  "GET_STATIC_TABLE":
      return {
        ...state,
        staticTable: action.payload,
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

export default staticTableReducer;
