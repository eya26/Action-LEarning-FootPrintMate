import axios from "axios";

export const loginUser = ({email, password}) => async dispatch => {
  console.log("Logging in ...");
  console.log("User Data:", { email, password }); // Check if user data is received correctly

  dispatch({ type: 'USER_LOGIN_REQUEST' });
 //to run this locally uncomment this
    //const url = "http://localhost:3001/api/signin" 

    //to run this on server
    const url = "http://13.210.201.93/api/signin" 
  const user = { email, password };
  try {
    const response = await axios.post(url, user);
    console.log("API Response:", response.data); // Check the response from the API

    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: response.data });
    sessionStorage.setItem('currentUser', JSON.stringify(response.data));
    //navigate('/');
  } catch (error) {
    console.log("API Error:", error); // Check any errors returned from the API
    dispatch({ type: 'USER_LOGIN_FAILED', payload: error });
  }
};
