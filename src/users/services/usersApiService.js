import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getUsers = async () => {

  try {
    const { data } = await axios.get(`${apiUrl}/users`);
    console.log(data);
    return data;

  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users/login`, user);

    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error.message);
  }
};

export const signup = async (normalizedUser) => {
  try {
    const { data } = await axios.post(`${apiUrl}/users`, normalizedUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const updateUser = async (userId, newUser) => {
  try {

    const { data } = await axios.patch(`${apiUrl}/users/${userId}`, newUser);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteUser = async (userId) => {
  try {

    const { data } = await axios.delete(`${apiUrl}/users/${userId}`);

    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};