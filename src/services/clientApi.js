import axios from "axios";

const BASE_URL = "http://localhost:3000/api";

export const getClients = async () => {
  const res = await axios.get(`${BASE_URL}/clients`);
  return res.data;
};

export const createClient = async (clientData) => {
  const res = await axios.post(`${BASE_URL}/clients`, clientData);
  console.log(`Client added!`, res.data);
  return res.data;
};

export const updateClient = async (id, clientData) => {
  const res = await axios.put(`${BASE_URL}/clients/${id}`, clientData);
  return res.data;
};

export const deleteClient = async (id) => {
  const res = await axios.delete(`${BASE_URL}/clients/${id}`);
  return res.data;
};

export const searchClients = async (query) => {
  const res = await axios.get(`${BASE_URL}/clients/search?q=${query}`);
  return res.data;
};
