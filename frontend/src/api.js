import axios from "axios";

const API = axios.create({
  baseURL: "https://future-fs-02-twwf.onrender.com",
});

export const getLeads = () => API.get("/");

export const createLead = (data) => API.post("/", data);

export const updateLead = (id, data) =>
  API.put(`/${id}`, data);

export const deleteLead = (id) =>
  API.delete(`/${id}`);