
import axios from "axios";

// Spring Boot backend URL
const API_URL = "http://localhost:8080/api/leads";

// Get all leads
export const getAllLeads = () => {
    return axios.get(API_URL);
};

// Get lead by ID
export const getLeadById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

// Add new lead
export const createLead = (lead) => {
    return axios.post(API_URL, lead);
};

// Update existing lead
export const updateLead = (id, lead) => {
    return axios.put(`${API_URL}/${id}`, lead);
};

// Delete lead
export const deleteLead = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};
