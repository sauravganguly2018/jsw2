const initialState = {
    listData: [],
    error: null
  };
  
  const listReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_LIST_SUCCESS':
        return {
          ...state,
          listData: action.payload,
          error: null
        };
      case 'FETCH_LIST_FAILURE':
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default listReducer;