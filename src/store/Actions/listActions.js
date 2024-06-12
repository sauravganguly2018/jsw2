export const fetchListData = () => {
    return async (dispatch, getState) => {
      try {
        const token = getState().auth.token; // Get the JWT token from the auth state
        const response = await fetch('your-api-endpoint', {
          headers: {
            'Authorization': `Bearer ${token}` // Include JWT token in the request headers
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch list data');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_LIST_SUCCESS', payload: data });
      } catch (error) {
        console.error('Fetch list data error:', error);
        dispatch({ type: 'FETCH_LIST_FAILURE', payload: error.message });
      }
    };
  };