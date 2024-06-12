const initialState = {
    latitude: null,
    longitude: null,
    locationName: null,
  };
  
  const locationReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LOCATION':
        return {
          ...state,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        };
      case 'SET_LOCATION_NAME':
        return {
          ...state,
          locationName: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default locationReducer;