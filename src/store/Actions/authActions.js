// actions/authActions.js
export const loginUser = (credentials) => {
    console.log('credentials: ', credentials)
    return async (dispatch) => {
        // Store authentication status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        dispatch({ type: 'LOGIN_SUCCESS', payload: true });


    //     try {
    //         // Call the login API
    //         const response = await fetch('/api/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(credentials),
    //         });
    //         if (!response.ok) {
    //             throw new Error('Login failed');
    //         }
    //         const data = await response.json();
            
    //         // Dispatch action to update Redux state
    //         dispatch({ type: 'LOGIN_SUCCESS', payload: data });
    //     } catch (error) {
    //         console.error('Login error:', error);
    //         // Dispatch action to handle login failure
    //         dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    //     }
    };
};

