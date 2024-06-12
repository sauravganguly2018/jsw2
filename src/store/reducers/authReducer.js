const initialState = {
    isLoggedIn: false,
    error: null,
    // other initial state properties
  };
  
  const authReducer = (state = initialState, action) => {
    // console.log(action.type)
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          // update state based on login success
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          error: action.payload
          // handle login failure
        };
      // other cases if needed
      default:
        return state;
    }
  };
  
  export default authReducer;