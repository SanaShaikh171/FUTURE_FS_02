import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/leads",
});

export const getLeads = () => API.get("/");

export const createLead = (data) => API.post("/", data);

export const updateLead = (id, data) =>
  API.put(`/${id}`, data);

export const deleteLead = (id) =>
  API.delete(`/${id}`);