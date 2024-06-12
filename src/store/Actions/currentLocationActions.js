// export const GET_CURRENT_LOCATION_NAME = 'GET_CURRENT_LOCATION_NAME';
// export const SET_CURRENT_LOCATION_NAME = 'SET_CURRENT_LOCATION_NAME';

// export const getCurrentLocationName = () => ({
//     type: GET_CURRENT_LOCATION_NAME
//   });
  
//   export const setCurrentLocationName = (name) => ({
//     type: SET_CURRENT_LOCATION_NAME,
//     payload: name
//   });

export const SET_LOCATION = 'SET_LOCATION';
export const setLocation = (latitude, longitude) => ({
    type: SET_LOCATION,
    payload: { latitude, longitude },
  });