import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000" 
});

export const UsersAPI = {
  list: () => api.get("/users"),            
  create: (payload) => api.post("/users", payload), 
  update: (id, payload) => api.put(`/users/${id}`, payload), 
  remove: (id) => api.delete(`/users/${id}`), 
};
