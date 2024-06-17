import axios from "axios";
axios.defaults.withCredentials = true; // This is as we are using cookies for authentication

export const onRegistration = async (registrationData) => {
  try {
    const response = await axios.post("http://localhost:8080/api/auth/register", registrationData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const onLogin = async (loginData) => {
  try {
    const response = await axios.post("http://localhost:8080/api/auth/login", loginData);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const onLogout = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/auth/logout");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const fetchProtectedInfo = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/auth/protected");
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}